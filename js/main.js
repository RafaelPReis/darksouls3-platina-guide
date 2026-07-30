var profilesKey = 'darksouls3_profiles';

(function($) {
    'use strict';

    var themes = {
        "Standard" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
        "Cosmo" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cosmo/bootstrap.min.css",
        "Cyborg" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cyborg/bootstrap.min.css",
        "Darkly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css",
        "Flatly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/flatly/bootstrap.min.css",
        "Journal" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/journal/bootstrap.min.css",
        "Lumen" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/lumen/bootstrap.min.css",
        "Paper" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/paper/bootstrap.min.css",
        "Readable" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/readable/bootstrap.min.css",
        "Sandstone" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css",
        "Simplex" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/simplex/bootstrap.min.css",
        "Slate" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/slate/bootstrap.min.css",
        "Spacelab" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/spacelab/bootstrap.min.css",
        "Superhero" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/superhero/bootstrap.min.css",
        "United" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/united/bootstrap.min.css",
        "Yeti" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/yeti/bootstrap.min.css"
    };

    var profiles = $.jStorage.get(profilesKey, {});

    /// assure default values are set
    /// necessary 'cause we're abusing local storage to store JSON data
    /// done in a more verbose way to be easier to understand
    if (!('current' in profiles)) profiles.current = 'Default Profile';
    if (!(profilesKey in profiles)) profiles[profilesKey] = {};
    initializeProfile(profiles.current);

    window.profilesKey = profilesKey;
    window.profiles = profiles;

    jQuery(document).ready(function($) {
        // Language Switcher Logic
        const savedLang = localStorage.getItem('ds3_lang') || 'pt';
        if (savedLang === 'en') {
            $('#btn_lang_pt').removeClass('active');
            $('#btn_lang_en').addClass('active');
        } else {
            $('#btn_lang_en').removeClass('active');
            $('#btn_lang_pt').addClass('active');
        }

        $('#btn_lang_pt').on('click', function() {
            localStorage.setItem('ds3_lang', 'pt');
            $('#btn_lang_en').removeClass('active');
            $(this).addClass('active');
            reloadAllTabs();
        });

        $('#btn_lang_en').on('click', function() {
            localStorage.setItem('ds3_lang', 'en');
            $('#btn_lang_pt').removeClass('active');
            $(this).addClass('active');
            reloadAllTabs();
        });

        function reloadAllTabs() {
            if (typeof renderPlaythroughTab === 'function') renderPlaythroughTab();
            if (typeof renderNpcQuestsTab === 'function') renderNpcQuestsTab();
            if (typeof renderChecklistsTab === 'function') renderChecklistsTab();
            if (typeof renderEquipmentTabs === 'function') renderEquipmentTabs();
            if (typeof renderCreditsTab === 'function') renderCreditsTab();
            if (typeof calculateTotals === 'function') calculateTotals();
        }

        // Render all tabs dynamically from clean data modules
        reloadAllTabs();

        $(document).on('click', '.fex-nav-tabs a, a[data-toggle="tab"]', function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            if (!href || !href.startsWith('#')) return;

            // Switch tab nav active class
            $('.fex-nav-tabs li').removeClass('active');
            $(this).parent('li').addClass('active');

            // Switch tab pane active class
            $('.tab-pane').removeClass('active').hide();
            $(href).addClass('active').show();

            // Trigger rendering for target tab
            if (href === '#tabPlaythrough' && typeof renderPlaythroughTab === 'function') renderPlaythroughTab();
            if (href === '#tabNPCQuests' && typeof renderNpcQuestsTab === 'function') renderNpcQuestsTab();
            if (href === '#tabChecklists' && typeof renderChecklistsTab === 'function') renderChecklistsTab();
            if ((href === '#tabWeapons' || href === '#tabArmors' || href === '#tabMisc') && typeof renderEquipmentTabs === 'function') renderEquipmentTabs();
        });

        // Open external links in new tab
        $("a[href^='http']").attr('target','_blank');

        populateProfiles();

        $(document).on('change', 'input[type="checkbox"]', function(e) {
            var $chk = $(this);
            var id = $chk.attr('id') || $chk.data('linked-id');
            var isChecked = $chk.prop('checked');

            if (!id) return;

            if (!profiles[profilesKey] || !profiles.current || !profiles[profilesKey][profiles.current]) {
                return;
            }
            if (!profiles[profilesKey][profiles.current].checklistData) {
                profiles[profilesKey][profiles.current].checklistData = {};
            }

            // Store state for primary ID
            profiles[profilesKey][profiles.current].checklistData[id] = isChecked;

            // Sync visual classes for primary ID
            $('#' + id).prop('checked', isChecked);
            if (isChecked) {
                $('[data-id="'+id+'"] label, #' + id).closest('label').addClass('completed');
                $('#' + id).closest('.steam-trophy-card').addClass('trophy-completed');
                $('[data-linked-id="'+id+'"]').prop('checked', true).closest('.npc-step-item').addClass('completed-step');
            } else {
                $('[data-id="'+id+'"] label, #' + id).closest('label').removeClass('completed');
                $('#' + id).closest('.steam-trophy-card').removeClass('trophy-completed');
                $('[data-linked-id="'+id+'"]').prop('checked', false).closest('.npc-step-item').removeClass('completed-step');
            }

            // BI-DIRECTIONAL ITEM SYNC (e.g. Playthrough <-> Collectible Checklist)
            if (typeof ITEM_SYNC_MAP !== 'undefined' && ITEM_SYNC_MAP[id]) {
                $.each(ITEM_SYNC_MAP[id], function(idx, peerId) {
                    profiles[profilesKey][profiles.current].checklistData[peerId] = isChecked;
                    $('#' + peerId).prop('checked', isChecked);
                    if (isChecked) {
                        $('[data-id="'+peerId+'"] label, #' + peerId).closest('label').addClass('completed');
                        $('[data-linked-id="'+peerId+'"]').prop('checked', true).closest('.npc-step-item').addClass('completed-step');
                    } else {
                        $('[data-id="'+peerId+'"] label, #' + peerId).closest('label').removeClass('completed');
                        $('[data-linked-id="'+peerId+'"]').prop('checked', false).closest('.npc-step-item').removeClass('completed-step');
                    }
                });
            }

            $.jStorage.set(profilesKey, profiles);

            if (typeof calculateTotals === 'function') calculateTotals();
            if (typeof renderSteamTrophiesTab === 'function') renderSteamTrophiesTab();
        });

        // Theme callback
        $('#themes').change(function(event) {
            var stylesheet = $('#themes').val();
            themeSetup(stylesheet);
            $.jStorage.set("style", stylesheet);
        });

        $('#profiles').change(function(event) {
            profiles.current = $(this).val();
            $.jStorage.set(profilesKey, profiles);

            $('li .checkbox .completed').show();

            populateChecklists();

            restoreState(profiles.current);

            calculateTotals();
        });

        $('#profileAdd').click(function() {
            $('#profileModalTitle').html('Add Profile');
            $('#profileModalName').val('');
            $('#profileModalAdd').show();
            $('#profileModalUpdate').hide();
            $('#profileModalDelete').hide();
            $('#profileModal').modal('show');
        });

        $('#profileEdit').click(function() {
            $('#profileModalTitle').html('Edit Profile');
            $('#profileModalName').val(profiles.current);
            $('#profileModalAdd').hide();
            $('#profileModalUpdate').show();
            if (canDelete()) {
                $('#profileModalDelete').show();
            } else {
                $('#profileModalDelete').hide();
            }
            $('#profileModal').modal('show');
        });

        $('#profileModalAdd').click(function(event) {
            event.preventDefault();
            var profile = $.trim($('#profileModalName').val());
            if (profile.length > 0) {
                initializeProfile(profile);

                profiles.current = profile;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
                populateChecklists();
                restoreState(profiles.current);
            }
        });

        $('#profileModalUpdate').click(function(event) {
            event.preventDefault();
            var newName = $.trim($('#profileModalName').val());
            if (newName.length > 0 && newName != profiles.current) {
                profiles[profilesKey][newName] = profiles[profilesKey][profiles.current];
                delete profiles[profilesKey][profiles.current];
                profiles.current = newName;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
            }
            $('#profileModal').modal('hide');
        });

        $('#profileModalDelete').click(function(event) {
            event.preventDefault();
            if (!canDelete()) {
                return;
            }
            if (!confirm('Are you sure?')) {
                return;
            }
            delete profiles[profilesKey][profiles.current];
            profiles.current = getFirstProfile();
            $.jStorage.set(profilesKey, profiles);
            populateProfiles();
            populateChecklists();
            restoreState(profiles.current);
            $('#profileModal').modal('hide');
        });

        $('#profileNG\\+').click(function() {
            $('#NG\\+Modal').modal('show');
        });

        $('#NG\\+ModalYes').click(function(event) {
            event.preventDefault();
            if (!confirm('Are you sure you wish to begin the next journey?')) {
                return;
            }
            $('[id^="playthrough_"], [id^="crow_"]').filter(':checked').each(function(){
                profiles[profilesKey][profiles.current].checklistData[this.id] = false;
            });
            $.each(profiles[profilesKey][profiles.current].hidden_categories, function(f){
                profiles[profilesKey][profiles.current].hidden_categories[f] = false;
            });
            if (profiles[profilesKey][profiles.current].journey < 3) {
                profiles[profilesKey][profiles.current].journey++;
            }
            $.jStorage.set(profilesKey, profiles);
            populateChecklists();
            restoreState(profiles.current);
            $('#NG\\+Modal').modal('hide');
        });

        $('#profileExport').click(function(){
            var filename = 'profiles.json';
            var text = JSON.stringify(profiles);
            if (window.Blob && window.navigator.msSaveBlob) {
                // Microsoft browsers (https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/html5/file-api/blob)
                var blob = new window.Blob([text]);
                window.navigator.msSaveBlob(blob, filename);
            } else {
                // All other modern browsers
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        });

        $('#profileImport').click(function(){
          $('#fileInput').trigger('click');
        });
        /* Will reject if an incorrect file or no file is selected */
        $('input#fileInput').change(function(){
          var fileInput = document.getElementById('fileInput');
          if(!fileInput.files || !fileInput.files[0] || !/\.json$/.test(fileInput.files[0].name)){
            alert("Bad input file. File should end in .json")
            return;
          }
          var fr = new FileReader();
          fr.readAsText(fileInput.files[0]);
          fr.onload = dataLoadCallback;
        });

        /*
        *  Import & Export using textarea instead of files
        */
        $('#profileExportText').click(function(){
            document.getElementById("profileText").value = JSON.stringify(profiles);
            document.getElementById("profileText").select();
            document.execCommand("copy");
        });

        $('#profileImportText').click(function(){
            if (!confirm('Are you sure you want to import profile data?')) {
                return;
            }
            try {
                var jsonProfileData = JSON.parse(document.getElementById("profileText").value);
                profiles = jsonProfileData;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
                populateChecklists();
                $('#profiles').trigger("change");
                location.reload();
            } catch(e) {
                alert(e); // error in the above string (in this case, yes)!
            }
        });

        $("#toggleHideCompleted").change(function() {
            // Store information about the old scroll position
            var oldPos = $(window).scrollTop();
            var labels = $('ul>li>div>label:visible:not(.completed)');
            var oldOff = labels.map(function(){return $(this).offset().top});

            var hidden = !$(this).is(':checked');

            $('body').toggleClass('hide_completed', !hidden);

            profiles[profilesKey][profiles.current].hide_completed = !hidden;
            $.jStorage.set(profilesKey, profiles);
            
            // Try to find a reasonable new scroll position
            for (var a=0; a<oldOff.length-1; a++) if (oldOff[a]>oldPos) break;
            for (var b=0; b<oldOff.length-1; b++) if (oldOff[b]>oldPos+$(window).height()) break;
            if (!oldOff.length || $('h2:visible').last().offset().top>oldPos) $('html, body').scrollTop(oldPos);
            else if (a==b) $('html, body').scrollTop(Math.round(labels.eq(b).offset().top)-Math.round($(window).height()/2));
            else {var c = Math.round((a+b)/2); $('html, body').scrollTop(oldPos+Math.round(labels.eq(c).offset().top)-Math.round(oldOff[c]));}
        });

        $('[data-ng-toggle]').change(function() {
            var journey = $(this).data('ng-toggle');

            profiles[profilesKey][profiles.current].journey = +journey
            $.jStorage.set(profilesKey, profiles);

            toggleFilteredClasses('h_ng\\+');
            toggleFilteredClasses('s_ng\\+');
            toggleFilteredClasses('s_ng\\+\\+');

            calculateTotals();
        });

        $('[data-item-toggle]').change(function() {
            var type = $(this).data('item-toggle');
            var to_hide = $(this).is(':checked');
            var item_toggles = $(this).closest('.btn-group.btn-group-vertical').find('[data-item-toggle]');

            profiles[profilesKey][profiles.current].hidden_categories[type] = to_hide;
            $.jStorage.set(profilesKey, profiles);

            toggleFilteredClasses(type);
            toggleFilteredClasses('f_none');

            // Mark parent category as hidden if and only if all items in it are hidden
            if (to_hide === (item_toggles.length === item_toggles.filter(':checked').length)) {
                $(this).closest('.btn-group.btn-group-vertical').find('[data-category-toggle]').not(function(){return this.checked === to_hide}).click();
            }
            // Apply partial highlight to the parent category if at least one item in it is hidden
            $(this).closest('.btn-group.btn-group-vertical').find('.btn-group-vertical').toggleClass('open', item_toggles.filter(':checked').length > 0);

            calculateTotals();
        });

        $('[data-category-toggle]').change(function() {
            var to_hide = $(this).is(':checked');
            var item_toggles = $(this).closest('.btn-group.btn-group-vertical').find('[data-item-toggle]');

            // Change all child items to the same state as the category
            if (to_hide || (item_toggles.length === item_toggles.filter(':checked').length)) {
                item_toggles.not(function(){return this.checked === to_hide}).click();
            }
        });

        calculateTotals();

    });

    function initializeProfile(profile_name) {
        if (!(profile_name in profiles[profilesKey])) profiles[profilesKey][profile_name] = {};
        if (!('checklistData' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].checklistData = {};
        if (!('collapsed' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].collapsed = {};
        if (!('current_tab' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].current_tab = '#tabPlaythrough';
        if (!('hide_completed' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].hide_completed = false;
        if (!('journey' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].journey = 1;
        if (!('hidden_categories' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].hidden_categories = {
                f_boss: false,
                f_miss: false,
                f_npc: false,
                f_estus: false,
                f_bone: false,
                f_tome: false,
                f_coal: false,
                f_ash: false,
                f_gest: false,
                f_sorc: false,
                f_pyro: false,
                f_mirac: false,
                f_ring: false,
                f_weap: false,
                f_arm: false,
                f_tit: false,
                f_gem: false,
                f_cov: false,
                f_misc: false
            };
    }

    /// restore all saved state, except for the current tab
    /// used on page load or when switching profiles
    function restoreState(profile_name) {
        $('a[href$="_col"]').each(function() {
            var value = profiles[profilesKey][profile_name].collapsed[$(this).attr('href')];
            var active = $(this).hasClass('collapsed');

            // interesting note: this condition is the same as (value ^ active),
            // but there's no logical xor in JS as far as I know; also, this is more readable
            if ((value && !active) || (!value && active)) {
                $($(this).attr('href')).collapse('toggle');
            }
        });

        var $button = $("#toggleHideCompleted");
        var hide_completed_state = profiles[profilesKey][profile_name].hide_completed;
        var button_active = $button.is(':checked');
        if ((hide_completed_state && !button_active) || (!hide_completed_state && button_active)) {
            $button.click();
        }

        $('[data-ng-toggle="' + profiles[profilesKey][profile_name].journey + '"]').click().change();
        $.each(profiles[profilesKey][profile_name].hidden_categories, function(key, value) {
            var $el = $('[data-item-toggle="' + key + '"]');
            var active = $el.is(':checked');

            if ((value && !active) || (!value && active)) {
                $el.click();
            }
        });
    }

    // Setup ("bootstrap", haha) styling
    function themeSetup(stylesheet) {
        if(stylesheet === null || stylesheet === undefined) { // if we didn't get a param, then
            stylesheet = $.jStorage.get("style") || "Standard"; // fall back on "light" if cookie not set
        }
        $("#bootstrap").attr("href", themes[stylesheet]);
    }

    function buildThemeSelection() {
        var style = $.jStorage.get("style") || "Standard";
        var themeSelect = $("#themes");
        $.each(themes, function(key, value){
            themeSelect.append(
                $('<option></option>').val(key).html(key + " Theme")
            );
        });
        themeSelect.val(style);
        return style;
    }

    function dataLoadCallback(arg){
      var jsonProfileData = JSON.parse(arg.currentTarget.result);
      profiles = jsonProfileData;
      $.jStorage.set(profilesKey, profiles);
      populateProfiles();
      populateChecklists();
      $('#profiles').trigger("change");
      location.reload();
    }

    function populateProfiles() {
        $('#profiles').empty();
        $.each(profiles[profilesKey], function(index, value) {
            $('#profiles').append($("<option></option>").attr('value', index).text(index));
        });
        $('#profiles').val(profiles.current);
    }

    function populateChecklists() {
        $('.checkbox input[type="checkbox"]')
            .prop('checked', false)
            .closest('label')
            .removeClass('completed')
            .closest('li').show();

        $.each(profiles[profilesKey][profiles.current].checklistData, function(index, value) {
            $('#' + index)
                .prop('checked', value)
                .closest('label')
                .toggleClass('completed', value);
        });

        calculateTotals();
    }

    function calculateTotals() {
        var checklistData = (profiles && profiles.current && profiles[profilesKey] && profiles[profilesKey][profiles.current]) 
          ? (profiles[profilesKey][profiles.current].checklistData || {}) 
          : {};

        if (typeof PLAYTHROUGH_AREAS_DATA !== 'undefined') {
            var overallCount = 0;
            var overallChecked = 0;

            PLAYTHROUGH_AREAS_DATA.forEach(function(area) {
                var areaCount = 0;
                var areaChecked = 0;

                area.items.forEach(function(item) {
                    areaCount++;
                    overallCount++;
                    if (checklistData[item.id]) {
                        areaChecked++;
                        overallChecked++;
                    }
                });

                var areaText = areaChecked + '/' + areaCount;
                $('#area_tot_' + area.id).text(areaText);
            });

            $('#playthrough_overall_total').text(overallChecked + '/' + overallCount);
        }

        // Calculate Equipment & Weapons Totals
        if (typeof CHECKLISTS_DATA !== 'undefined') {
          ['weapons', 'armors', 'misc'].forEach(function(key) {
            if (CHECKLISTS_DATA[key]) {
              CHECKLISTS_DATA[key].forEach(function(cat) {
                var count = 0, checked = 0;
                cat.items.forEach(function(item) {
                  count++;
                  if (checklistData[item.id]) checked++;
                });
                $('#cat_tot_' + cat.id).text(checked + '/' + count);
              });
            }
          });
        }

        var exportEl = document.getElementById("profileText");
        if (exportEl) exportEl.value = JSON.stringify(profiles);
    }

    function addCheckbox(el) {
        var $el = $(el);
        // assuming all content lies on the first line
        var content = $el.html().split('\n')[0];
        var sublists = $el.children('ul');

        content =
            '<div class="checkbox">' +
                '<label>' +
                    '<input type="checkbox" id="' + $el.attr('data-id') + '">' +
                    '<span class="item_content">' + content + '</span>' +
                '</label>' +
            '</div>';

        $el.html(content).append(sublists);

        if (profiles[profilesKey][profiles.current].checklistData[$el.attr('data-id')] === true) {
            $('#' + $el.attr('data-id')).prop('checked', true);
            $('label', $el).addClass('completed');
        }
    }

    function canDelete() {
        var count = 0;
        $.each(profiles[profilesKey], function(index, value) {
            count++;
        });
        return (count > 1);
    }

    function getFirstProfile() {
        for (var profile in profiles[profilesKey]) {
            return profile;
        }
    }

    function canFilter(entry) {
        var classAttr = entry.attr('class');
        if (!classAttr) {
            return false;
        }
        if (classAttr === 'f_none') {
            // If some filters are enabled, all entries marked f_none are automatically filtered as well 
            return Object.values(profiles[profilesKey][profiles.current].hidden_categories).some(function(f){return f});
        }
        var classList = classAttr.split(/\s+/);
        for (var i = 0; i < classList.length; i++) {
            // Hide(h) or show(s) entries based on journey number
            if ((classList[i].match(/^h_ng\+*$/) && classList[i].match(/^h_ng(\+*)$/)[1].length < profiles[profilesKey][profiles.current].journey) ||
               (classList[i].match(/^s_ng\+*$/) && classList[i].match(/^s_ng(\+*)$/)[1].length >= profiles[profilesKey][profiles.current].journey)) {
                return true;
            }
        }
        var foundMatch = 0;
        for (var i = 0; i < classList.length; i++) {
            if (!classList[i].match(/^f_.*/)) {
                continue;
            }
            if(classList[i] in profiles[profilesKey][profiles.current].hidden_categories) {
                if(!profiles[profilesKey][profiles.current].hidden_categories[classList[i]]) {
                    return false;
                }
                foundMatch = 1;
            }
        }
        if (foundMatch === 0) {
            return false;
        }
        return true;
    }

    function toggleFilteredClasses(str) {
        $("li." + str).each(function() {
            if(canFilter($(this))) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', '');
            }
        });
    }

    /*
     * ----------------------------------
     * Search and highlight functionality
     * ----------------------------------
     */
    $(function() {
        var jets = [new Jets({
            searchTag: '#playthrough_search',
            contentTag: '#playthrough_list ul'
        }), new Jets({
            searchTag: '#item_search',
            contentTag: '#item_list h4, #item_list ul'// This does not mean that we are searching inside the content of both <h4> and <ul> tags
        }), new Jets({
            searchTag: '#weapons_search',
            contentTag: '#weapons_list h4, #weapons_list ul'// The outcome is that all <h4> tags are hidden while searching inside <ul> tags
        }), new Jets({
            searchTag: '#armors_search',
            contentTag: '#armors_list ul'
        })];

        $('#playthrough_search').keyup(function() {
            $('#playthrough_list').unhighlight();
            $('#playthrough_list').highlight($(this).val());
        });
        $('#item_search').keyup(function() {
            $('#item_list').unhighlight();
            $('#item_list').highlight($(this).val());
        });
        $('#weapons_search').keyup(function() {
            $('#weapons_list').unhighlight();
            $('#weapons_list').highlight($(this).val());
        });
        $('#armors_search').keyup(function() {
            $('#armors_list').unhighlight();
            $('#armors_list').highlight($(this).val());
        });
    });

    /*
     * -------------------------
     * Back to top functionality
     * -------------------------
     */
    $(function() {
        var offset = 220;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.fadingbutton').fadeIn(duration);
            } else {
                $('.fadingbutton').fadeOut(duration);
            }
        });

        $('.back-to-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    });

    /*
     * ------------------------------------------
     * Restore tabs/hidden sections functionality
     * ------------------------------------------
     */
     $(function() {
        // reset `Hide completed` button state (otherwise Chrome bugs out)
        $('#toggleHideCompleted').attr('checked', false);

        // restore collapsed state on page load
        restoreState(profiles.current);

        var savedTab = profiles[profilesKey][profiles.current].current_tab;
        if (savedTab === '#tabOptions' || savedTab === '#tabSteamTrophies') {
            savedTab = '#tabPlaythrough';
        }
        if (savedTab) {
            $('.fex-nav-tabs li a[href="' + savedTab + '"], .nav li a[href="' + savedTab + '"]').click();
        }

        // register on click handlers to store state
        $('a[href$="_col"]').on('click', function(el) {
            var collapsed_key = $(this).attr('href');
            var saved_tab_state = !!profiles[profilesKey][profiles.current].collapsed[collapsed_key];

            profiles[profilesKey][profiles.current].collapsed[$(this).attr('href')] = !saved_tab_state;

            $.jStorage.set(profilesKey, profiles);
        });

        $('.fex-nav-tabs li a, .nav li a').on('click', function(el) {
            var tabHref = $(this).attr('href');
            if (tabHref && tabHref.indexOf('#tab') === 0) {
                profiles[profilesKey][profiles.current].current_tab = tabHref;
                $.jStorage.set(profilesKey, profiles);

                if (tabHref === '#tabNPCQuests') {
                    if (typeof renderNpcQuestsTab === 'function') renderNpcQuestsTab();
                } else if (tabHref === '#tabChecklists') {
                    if (typeof renderSteamTrophiesTab === 'function') renderSteamTrophiesTab();
                }
            }
        });

        if (typeof injectNpcBadgesIntoPlaythrough === 'function') injectNpcBadgesIntoPlaythrough();
        if (typeof injectAreaNpcHeaders === 'function') injectAreaNpcHeaders();
        if (typeof renderNpcQuestsTab === 'function') renderNpcQuestsTab();
        if (typeof renderSteamTrophiesTab === 'function') renderSteamTrophiesTab();
     });
})( jQuery );

// to color the plus symbol in combined item pickups
$(".p").html('<a style="pointer-events:none">&nbsp;+ </a>');

const ptUl = $('#playthrough_list ul, #item_list ul, #Weapons_col, #Shields_col, #armors_list ul, #Pickle_Pee_Pump-a-Rum_Crow_col')

function sequentialClick(items, filterFn = () => true, delay = 10) {
    let i = 0;
    function next() {
        if (i < items.length) {
            const item = items[i];
            if (filterFn(item)) $(item).click();
            i++;
            setTimeout(next, delay);
        }
    }
    next();
}


ptUl.each(function () {
    const ul = $(this);
    const h3 = ul.prev('h3');

    const btnGroup = $('<div class="btn-group section_btn-group" role="group" aria-label="Section Checklist">');
    const btnToggle = $('<button class="btn btn-primary">Toggle</button>');
    const btnDelete = $('<button class="btn btn-primary">Clear</button>');
    btnGroup.append(btnToggle, btnDelete)
    h3.append(btnGroup);
    h3.addClass("section_header")

    btnToggle.click(function () {
        const items = ul.find('input[type="checkbox"]');
        sequentialClick(items);
    });
    btnDelete.click(function () {
        const items = ul.find('input[type="checkbox"]');
        sequentialClick(items, (item) => item.checked);
    });
});

function renderNpcQuestsTab() {
    var $container = $('#npc_quests_container');
    if ($container.length === 0 || typeof NPC_QUESTS_DATA === 'undefined') return;

    $container.empty();
    var curProfile = (typeof profiles !== 'undefined' && profiles.darksouls3_profiles && profiles.current && profiles.darksouls3_profiles[profiles.current]) ? (profiles.darksouls3_profiles[profiles.current].checklistData || {}) : {};

    $.each(NPC_QUESTS_DATA, function(i, npc) {
        var card = $('<div class="npc-quest-card"></div>');
        card.append('<h3>' + npc.title + '</h3>');
        card.append('<p class="npc-summary-text">' + npc.summary + '</p>');

        if (npc.failCondition) {
            card.append('<div class="npc-fail-box"><strong>🚨 PONTO DE NÃO RETORNO / FALHA DA QUEST:</strong> ' + npc.failCondition + '</div>');
        }

        var stepsList = $('<div class="npc-steps-list"></div>');
        $.each(npc.steps, function(j, step) {
            var isChecked = !!curProfile[step.linkedPlaythroughId];
            var stepItem = $('<div class="npc-step-item ' + (isChecked ? 'completed-step' : '') + '"></div>');

            var header = $('<div class="npc-step-header"></div>');
            var checkLabel = $('<label class="npc-step-label"></label>');
            var chk = $('<input type="checkbox" data-linked-id="' + step.linkedPlaythroughId + '" ' + (isChecked ? 'checked' : '') + ' style="margin-right:8px; vertical-align:middle;" />');
            
            checkLabel.append(chk).append('<span class="badge-npc-step">Passo ' + step.stepNum + '</span> <span class="npc-step-title">' + step.title + '</span>');
            header.append(checkLabel);
            header.append('<span class="npc-location-badge">' + step.location + '</span>');
            stepItem.append(header);

            stepItem.append('<p class="npc-step-desc">' + step.description + '</p>');

            if (step.nextLocation) {
                stepItem.append('<div class="npc-next-loc"><strong>📍 Próximo Diálogo / Encontro:</strong> ' + step.nextLocation + '</div>');
            }

            if (step.failWarning) {
                stepItem.append('<div class="badge-fail-warning">' + step.failWarning + '</div>');
            }

            stepsList.append(stepItem);
        });

        card.append(stepsList);
        $container.append(card);
    });
}

function injectNpcBadgesIntoPlaythrough() {
    if (typeof NPC_QUESTS_DATA === 'undefined') return;
    $.each(NPC_QUESTS_DATA, function(i, npc) {
        $.each(npc.steps, function(j, step) {
            if (step.linkedPlaythroughId) {
                var $li = $('[data-id="' + step.linkedPlaythroughId + '"]');
                if ($li.length > 0 && $li.find('.npc-badge-link').length === 0) {
                    var badgeHtml = ' <span class="npc-badge-link" style="background:#2563eb; color:#fff; padding:2px 6px; border-radius:4px; font-size:0.8em; font-weight:bold;">👤 Quest: ' + npc.name + '</span>';
                    $li.find('.item_content').append(badgeHtml);
                }
            }
        });
    });
}

function injectAreaNpcHeaders() {
    if (typeof AREA_NPC_MAP === 'undefined') return;
    $.each(AREA_NPC_MAP, function(areaKey, areaInfo) {
        var $h3 = $('#' + areaKey);
        if ($h3.length > 0 && $h3.next('.area-npc-banner').length === 0) {
            var bannerHtml = '<div class="area-npc-banner">' +
              '<div class="area-npc-title">👥 NPCs PRESENTES NESTA ÁREA:</div>';
            
            $.each(areaInfo.npcs, function(k, npcItem) {
                var dangerClass = npcItem.failWarning ? ' area-npc-pill-danger' : '';
                bannerHtml += '<div class="area-npc-pill' + dangerClass + '"><strong>' + npcItem.name + ':</strong> ' + npcItem.note + '</div>';
            });

            bannerHtml += '</div>';
            $h3.after(bannerHtml);
        }
    });
}



// Ensure all external links open in a new tab
$(document).on('click', 'a[href^="http"]', function(e) {
  $(this).attr('target', '_blank').attr('rel', 'noopener noreferrer');
});
