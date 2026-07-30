// Dark Souls 3 NPC Questlines Complete Database & Area Mapping

var NPC_QUESTS_DATA = [
  {
    "id": "siegward",
    "name": "Siegward de Catarina (Onion Knight)",
    "title": "🧅 Siegward de Catarina (Onion Knight)",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gestos Toast, Sleep, Rejoice | Milagre Emit Force | Laje de Titanita)",
    "summary": "Recompensas: Gestos Toast, Sleep e Rejoice, Milagre Emit Force, Laje de Titanita (Titanite Slab), Armadura de Catarina, Espada Storm Ruler e auxílio na luta contra Yhorm o Gigante.",
    "failCondition": "Avançar para Irithyll sem comprar a Armadura de Catarina com Patches e jogá-la no poço da Catedral fará Siegward morrer no poço.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Elevador da Torre & Luta contra o Demônio de Fogo",
        "location": "Assentamento dos Mortos-Vivos",
        "linkedPlaythroughId": "playthrough_3_12",
        "description": "Fale com Siegward no elevador da torre. Suba ou desça no elevador, pule na plataforma intermediária de madeira e lute junto com Siegward contra o Demônio de Fogo. Fale com ele 3 vezes para receber Siegbräu, Gesto Toast e Gesto Sleep.",
        "nextLocation": "Poço do lado de fora da Capela da Purificação na Catedral das Profundezas."
      },
      {
        "stepNum": 2,
        "title": "Resgate no Poço da Catedral das Profundezas",
        "location": "Catedral das Profundezas",
        "linkedPlaythroughId": "playthrough_5_24",
        "description": "Após abrir os portões principais da Catedral, fale com Siegward preso dentro do poço. Compre o Conjunto de Armadura de Catarina com Patches e jogue no poço para ele sair. Recompensa: Gesto Rejoice.",
        "nextLocation": "Cozinha da Cidade Irithyll do Vale Boreal."
      },
      {
        "stepNum": 3,
        "title": "Cozinha de Irithyll & Sopa de Estus",
        "location": "Irithyll do Vale Boreal",
        "linkedPlaythroughId": "playthrough_8_18",
        "description": "Encontre Siegward descansando perto da lareira na cozinha após os esgotos. Fale com ele para receber o Milagre Emit Force, Siegbräu e recuperar vida na Sopa de Estus.",
        "failWarning": "NÃO atraia os monstros da mansão para a cozinha ou Siegward pode ser morto!",
        "nextLocation": "Cela da Prisão de Irithyll / Capital Profanada."
      },
      {
        "stepNum": 4,
        "title": "Libertação da Cela na Capital Profanada",
        "location": "Prisão de Irithyll / Capital Profanada",
        "linkedPlaythroughId": "playthrough_10_22",
        "description": "Obtenha a Chave do Carcereiro (Jailbreaker's Key). Pule pelo telhado da mansão no pântano tóxico para entrar na cela de Siegward. Fale com ele para libertá-lo e receber uma Laje de Titanita (Titanite Slab).",
        "nextLocation": "Arena de Chefe de Yhorm o Gigante."
      },
      {
        "stepNum": 5,
        "title": "Batalha contra Yhorm o Gigante",
        "location": "Capital Profanada (Arena de Yhorm)",
        "linkedPlaythroughId": "playthrough_10_25",
        "description": "Entre na arena do chefe Yhorm o Gigante. Siegward entrará em uma cutscene épica e lutará ao seu lado com a Storm Ruler. Após vencer, fale com ele uma última vez para receber o último Siegbräu.",
        "nextLocation": "Quest Concluída com Sucesso!"
      }
    ]
  },
  {
    "id": "anri_horace",
    "name": "Anri de Astora & Horace o Silencioso",
    "title": "⚔️ Anri de Astora & Horace o Silencioso",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Troféu Usurpação da Chama | Espada Reta de Anri | Pacto Sentinelas Azuis)",
    "summary": "Recompensas: Requisito essencial para o Troféu Usurpação da Chama (Usurpation of Fire Ending), Espada Reta de Anri, Anel do Elmo Obscuro e Pacto Sentinelas Azuis.",
    "failCondition": "Matar o peregrino disfarçado de estátua na Igreja de Yorshka QUEBRARÁ o final Usurpação da Chama!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Encontro na Fortaleza de Meio Caminho",
        "location": "Estrada dos Sacrifícios",
        "linkedPlaythroughId": "playthrough_4_4",
        "description": "Fale com Anri e Horace na fogueira da Fortaleza de Meio Caminho. Fale com Horace para obter o Pacto Sentinelas Azuis.",
        "nextLocation": "Santuário do Elo do Fogo após derrotar os Vigilantes do Abismo."
      },
      {
        "stepNum": 2,
        "title": "Conversa no Santuário & Entrada nas Catacumbas",
        "location": "Santuário do Elo do Fogo / Catacumbas de Carthus",
        "linkedPlaythroughId": "playthrough_6_8",
        "description": "Fale com Anri no Santuário. Em seguida, encontre Anri duas vezes nas Catacumbas de Carthus procurando por Horace. NÃO conte a Anri onde Horace está se você já tiver matado Horace no Lago Ardente!",
        "nextLocation": "Igreja de Yorshka em Irithyll do Vale Boreal."
      },
      {
        "stepNum": 3,
        "title": "Igreja de Yorshka & O Peregrino Disfarçado",
        "location": "Irithyll do Vale Boreal",
        "linkedPlaythroughId": "playthrough_8_12",
        "description": "Fale com Anri na fogueira da Igreja de Yorshka para obter o Gesto Quiet Resolve. NÃO MATE o peregrino disfarçado de estátua no canto da igreja se quiser o final da Usurpação da Chama!",
        "nextLocation": "Túmulo da Lua Obscura em Anor Londo (Câmara de Casamento)."
      },
      {
        "stepNum": 4,
        "title": "Cerimônia de Casamento na Câmara Secreta",
        "location": "Anor Londo (Câmara da Lua Obscura)",
        "linkedPlaythroughId": "playthrough_8_28",
        "description": "Após derrotar o Pontífice Sulyvahn, fale com Yuria no Santuário. Vá até o túmulo secreto de Anor Londo (atrás da estátua ilusória de Gwyn). Receba a Espada da Revelação do peregrino e realize o ritual com Anri. Recompensa: 3 Dark Sigils extras e Espada Reta de Anri.",
        "nextLocation": "Conclua o jogo derrotando a Alma das Cinzas para o Troféu Usurpação da Chama!"
      }
    ]
  },
  {
    "id": "yoel_yuria",
    "name": "Yoel de Londor & Yuria de Londor",
    "title": "🦅 Yoel de Londor & Yuria de Londor",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (5 Dark Sigils | Gestos Beckon, Dignified Bow e Duel Bow | Final Usurpação)",
    "summary": "Recompensas: 5 Níveis Gratuitos, 5 Dark Sigils (necessários para o Final Usurpação da Chama), Conjunto Obscuro, Gesto Beckon, Gesto Dignified Bow e Gesto Duel Bow (via Sombra Pálida).",
    "failCondition": "Curar o Dark Sigil com a Guardiã do Fogo fará Yuria abandonar seu jogo permanentemente!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Recrutando Yoel na Muralha Alta",
        "location": "Assentamento dos Mortos-Vivos",
        "linkedPlaythroughId": "playthrough_3_2",
        "description": "Encontre Yoel entre os peregrinos caídos no Pé da Muralha Alta. Aceite seus serviços para enviá-lo ao Santuário do Elo do Fogo. Fale com ele lá para receber o Gesto Beckon.",
        "nextLocation": "Santuário do Elo do Fogo."
      },
      {
        "stepNum": 2,
        "title": "Extrair a Força Verdadeira (5 Níveis Gratuitos)",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_3_18",
        "description": "Morra repetidamente para acumular Hollowing. Volte a Yoel e extraia a força verdadeira 5 vezes para obter os 5 Dark Sigils. Isso DEVE ser feito ANTES de derrotar os Vigilantes do Abismo!",
        "failWarning": "Se você matar os Vigilantes do Abismo sem extrair os 5 Dark Sigils, Yoel morrerá e Yuria NÃO APARECERÁ!",
        "nextLocation": "Santuário do Elo do Fogo (Yuria aparecerá no lugar de Yoel)."
      },
      {
        "stepNum": 3,
        "title": "Chegada de Yuria & Gesto Dignified Bow",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_5_28",
        "description": "Após a morte de Yoel com os 5 Dark Sigils, Yuria surgirá ao lado de seu corpo. Fale com ela para receber o Gesto Dignified Bow e comprar tomos e itens de Londor.",
        "nextLocation": "Conclusão do Ritual de Casamento com Anri."
      }
    ]
  },
  {
    "id": "sirris",
    "name": "Sirris dos Reinos Sem Sol",
    "title": "🌙 Sirris dos Reinos Sem Sol",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gesto Darkmoon Loyalty | Anel do Gato Prateado / Silvercat Ring)",
    "summary": "Recompensas: Gesto Darkmoon Loyalty, Anel do Gato Prateado (Silvercat Ring - essencial para o troféu de Anéis), Machado Crepuscular, Armadura do Por-do-Sol e Espada Sunless Talisman.",
    "failCondition": "NÃO entregue nenhuma Língua Pálida (Pale Tongue) a Rosaria antes de terminar a quest da Sirris, ou ela se tornará sua inimiga!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Primeiro Encontro no Santuário",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_4_8",
        "description": "Fale com Sirris no Santuário do Elo do Fogo após encontrar Anri e Horace na Fortaleza de Meio Caminho.",
        "nextLocation": "Santuário do Elo do Fogo após entregar o Tomo dos Sonhos do Caçador."
      },
      {
        "stepNum": 2,
        "title": "Tomo dos Sonhos do Caçador & Gesto Darkmoon Loyalty",
        "location": "Fortaleza de Farron / Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_4_18",
        "description": "Encontre as Cenizas do Sonhador (Dreamchaser's Ashes) perto da fogueira do Lobo Velho de Farron e entregue à Serva do Santuário. Recarregue a área e fale com Sirris para receber o Gesto Darkmoon Loyalty.",
        "nextLocation": "Ponte de Irithyll do Vale Boreal."
      },
      {
        "stepNum": 3,
        "title": "Invasão na Ponte de Irithyll & Anel do Gato Prateado",
        "location": "Irithyll do Vale Boreal",
        "linkedPlaythroughId": "playthrough_8_6",
        "description": "Após derrotar o Fera do Sulyvahn na ponte de entrada de Irithyll, procure pelo sinal de invocação vermelho da Sirris na ponte. Entre no mundo dela e ajude-a a derrotar Creighton o Wandering Knight. Fale com ela no Santuário para receber o Anel do Gato Prateado (Silvercat Ring) e a Adaga de Mail Breaker.",
        "nextLocation": "Arena de Chefe do Grande Carvalho Corrompido no Assentamento dos Mortos."
      },
      {
        "stepNum": 4,
        "title": "Duelo contra Hodrick no Assentamento dos Mortos",
        "location": "Assentamento dos Mortos-Vivos",
        "linkedPlaythroughId": "playthrough_9_15",
        "description": "Após derrotar Aldrich, encontre o sinal de invocação da Sirris do lado de fora da arena do Grande Carvalho Corrompido. Entre no mundo dela e ajude-a a derrotar seu avô, Holy Knight Hodrick. Recompensa: Conjunto do Pôr do Sol e Juramento de Cavalaria.",
        "nextLocation": "Quest Concluída!"
      }
    ]
  },
  {
    "id": "greirat",
    "name": "Greirat do Assentamento dos Mortos-Vivos",
    "title": "🎒 Greirat do Assentamento dos Mortos-Vivos",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gesto Curl Up | Vendedor de Flechas & Anéis de Platina)",
    "summary": "Recompensas: Gesto Curl Up, liberação de itens raros, flechas avançadas e Anel da Placa de Pedra de Aço +3.",
    "failCondition": "Enviar Greirat para o 2º saque em Irithyll sem garantir que Siegward ou Patches o salvem resultará na morte de Greirat!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Resgate da Cela na Muralha Alta",
        "location": "Muralha Alta de Lothric",
        "linkedPlaythroughId": "playthrough_2_8",
        "description": "Obtenha a Chave da Cell na Muralha Alta e abra a cela de Greirat. Aceite seu pedido para entregar o Anel do Osso de Loretta no Assentamento dos Mortos.",
        "nextLocation": "Assentamento dos Mortos-Vivos."
      },
      {
        "stepNum": 2,
        "title": "Entrega do Osso de Loretta & Gesto Curl Up",
        "location": "Assentamento dos Mortos / Santuário",
        "linkedPlaythroughId": "playthrough_3_8",
        "description": "Encontre o Osso de Loretta na varanda do Assentamento e entregue a Greirat no Santuário. Recarregue a área e fale com ele enquanto ele chora para receber o Gesto Curl Up.",
        "nextLocation": "Primeiro Saque (Assentamento dos Mortos-Vivos)."
      },
      {
        "stepNum": 3,
        "title": "Segundo Saque (Irithyll) - CRÍTICO",
        "location": "Irithyll do Vale Boreal",
        "linkedPlaythroughId": "playthrough_8_16",
        "description": "Envie Greirat para o saque em Irithyll SOMENTE se Siegward estiver descansando na cozinha de Irithyll com sua armadura OU se você tiver informado Patches sobre a ida de Greirat ANTES de derrotar o chefe Pontífice Sulyvahn.",
        "failWarning": "Se você avançar para a Masmorra de Irithyll antes de salvar Greirat, ele MORRERÁ nos esgotos de Irithyll!",
        "nextLocation": "Terceiro Saque (Grandes Arquivos) - Saque Fatal Garantido."
      }
    ]
  },
  {
    "id": "orbeck",
    "name": "Orbeck de Vinheim",
    "title": "📜 Orbeck de Vinheim",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Vendedor do Troféu Master of Sorceries | Anel do Dragão Adormecido | Gesto Silent)",
    "summary": "Recompensas: Requisito essencial para o Troféu Master of Sorceries, Anel do Dragão Adormecido (Slumbering Dragoncrest Ring), Anel do Dragão Jovem, Gesto Silent e Espada Curva de Morion (via Yuria).",
    "failCondition": "Se você derrotar 4 chefes sem entregar pelo menos 1 Tomo de Feitiçaria a Orbeck, ele abandonará o Santuário para sempre!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Recrutamento no 2º Andar das Ruínas",
        "location": "Estrada dos Sacrifícios (Bosque da Crucificação)",
        "linkedPlaythroughId": "playthrough_4_12",
        "description": "Com pelo menos 10 de Inteligência, fale com Orbeck no 2º andar das ruínas antes da arena do Sábio de Cristal. Prometa entregar tomos de feitiçaria a ele para enviá-lo ao Santuário.",
        "nextLocation": "Santuário do Elo do Fogo."
      },
      {
        "stepNum": 2,
        "title": "Entrega de Tomos & Anéis Recompensa",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_4_16",
        "description": "Entregue os 4 Tomos de Feitiçaria (Scrolls: Dragon, Sage, Logan, Court Sorcerer). Compre feitiços dele para receber o Anel do Dragão Adormecido, Anel do Dragão Jovem e o Gesto Silent.",
        "nextLocation": "Grandes Arquivos após comprar TODOS os feitiços."
      }
    ]
  },
  {
    "id": "cornyx",
    "name": "Cornyx do Grande Pântano",
    "title": "🔥 Cornyx do Grande Pântano",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Vendedor do Troféu Master of Pyromancies | Gesto Welcome)",
    "summary": "Recompensas: Requisito essencial para o Troféu Master of Pyromancies, Gesto Welcome, Chama de Piromancia e melhorias de Piromancia.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Resgate na Gaiola do Telhado",
        "location": "Assentamento dos Mortos-Vivos",
        "linkedPlaythroughId": "playthrough_3_10",
        "description": "Encontre Cornyx trancado em uma gaiola de madeira no telhado do edifício acima da fogueira da Ponte Derruída. Fale com ele e aceite seus serviços para enviá-lo ao Santuário.",
        "nextLocation": "Santuário do Elo do Fogo."
      },
      {
        "stepNum": 2,
        "title": "Gesto Welcome & Tomos de Piromancia",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_3_16",
        "description": "Fale com Cornyx no Santuário para receber a Chama de Piromancia e o Gesto Welcome. Entregue os Tomos de Piromancia do Pântano e do Grande Pântano para aprender piromancias avançadas.",
        "nextLocation": "Mestre permanente de Piromancia no Santuário."
      }
    ]
  },
  {
    "id": "irina_eygon",
    "name": "Irina de Carim & Eygon de Carim",
    "title": "✨ Irina de Carim & Eygon de Carim",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Vendedora do Troféu Master of Miracles | Gesto Prayer)",
    "summary": "Recompensas: Requisito essencial para o Troféu Master of Miracles, Gesto Prayer, ajuda de Eygon em batalhas de chefes e conjunto de armadura de Morne.",
    "failCondition": "Comprar qualquer Milagre Negro (Dark Miracle) de Irina fará Eygon sequestrá-la do Santuário!",
    "steps": [
      {
        "stepNum": 1,
        "title": "Resgate da Cela de Irina",
        "location": "Assentamento dos Mortos-Vivos",
        "linkedPlaythroughId": "playthrough_3_14",
        "description": "Compre a Chave do Túmulo com a Serva do Santuário. Abra a cela subterrânea perto de Eygon, fale com Irina e toque nela para enviá-la ao Santuário. Fale com Eygon do lado de fora para firmar aliança.",
        "nextLocation": "Santuário do Elo do Fogo."
      },
      {
        "stepNum": 2,
        "title": "Caminho da Guardiã do Fogo (Milagres de Luz)",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_3_20",
        "description": "Entregue a Irina SOMENTE os Tomos Sagrados de Braille de Braille de Carim e de Lothric. Compre todos os milagres de luz para que ela se torne uma Guardiã do Fogo na torre ao fundo do Santuário.",
        "nextLocation": "Torre dos Feitiços no Santuário."
      }
    ]
  },
  {
    "id": "leonhard",
    "name": "Ringfinger Leonhard",
    "title": "🗡️ Ringfinger Leonhard",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gesto Applause | Máscara do Crescente | Alma de Rosaria)",
    "summary": "Recompensas: Gesto Applause, Chave da Sala do Elevador (Elevator Room Key), Orbe do Olho Vermelho (Red Eye Orb), Alma de Rosaria e Espada Espada da Lua Crescente.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Orbes de Invasão no Santuário",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_2_4",
        "description": "Fale com Leonhard encostado no trono de Lothric no Santuário após alcançar a Muralha Alta para receber 5 Orbes Vermelhos Quebrados.",
        "nextLocation": "Santuário do Elo do Fogo após obter uma Pálida Língua."
      },
      {
        "stepNum": 2,
        "title": "Chave da Sala do Elevador & Red Eye Orb",
        "location": "Muralha Alta de Lothric",
        "linkedPlaythroughId": "playthrough_2_10",
        "description": "Obtenha uma Língua Pálida e fale com Leonhard para receber a Chave da Sala do Elevador. Vá até a Muralha Alta, abra a porta trancada sob a fogueira da Torre na Muralha e derrote o Darkwraith para obter o Red Eye Orb permanente. Fale com Leonhard para receber o Gesto Applause.",
        "nextLocation": "Quarto de Rosaria na Catedral das Profundezas."
      }
    ]
  },
  {
    "id": "patches",
    "name": "Patches o Inquebrável",
    "title": "🧅 Patches o Inquebrável",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gestos Prostration e Squat | Salvação de Siegward & Greirat)",
    "summary": "Recompensas: Gestos Prostration e Squat, Armadura de Catarina (para salvar Siegward), Anel do Cavalo de Madeira (Horsehoof Ring) e mercador de itens valiosos.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Emboscada na Catedral das Profundezas",
        "location": "Catedral das Profundezas",
        "linkedPlaythroughId": "playthrough_5_22",
        "description": "Encontre Patches disfarçado com a Armadura de Catarina abaixando a ponte na Catedral. Encontre-o no outro lado para aceitar suas desculpas e obter o Gesto Prostration.",
        "nextLocation": "Torre do Santuário do Elo do Fogo."
      },
      {
        "stepNum": 2,
        "title": "Emboscada na Torre & Gesto Squat",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_5_23",
        "description": "Compre a Chave da Torre (20.000 almas). Suba de elevador no topo da torre e Patches trancará a porta atrás de você. Caia com segurança, encontre-o no andar superior do Santuário e perdoe-o para obter o Gesto Squat e liberar seu mercador.",
        "nextLocation": "Mercador permanente no Santuário."
      }
    ]
  },
  {
    "id": "hawkwood",
    "name": "Hawkwood o Deserter",
    "title": "🛡️ Hawkwood o Deserter",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gesto Collapse | Anel de Farron | Pedras de Dragão)",
    "summary": "Recompensas: Gesto Collapse, Anel de Farron (Farron Ring - essencial para o troféu de Anéis), Escudo do Deserter e Pedras de Cabeça/Torso de Dragão.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Gesto Collapse no Santuário",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_1_3",
        "description": "Fale com Hawkwood desanimado sentado nos degraus do Santuário para obter o Gesto Collapse.",
        "nextLocation": "Santuário do Elo do Fogo após derrotar os Vigilantes do Abismo."
      },
      {
        "stepNum": 2,
        "title": "Anel de Farron & Duelo Final na Arena dos Vigilantes",
        "location": "Fortaleza de Farron (Arena dos Vigilantes)",
        "linkedPlaythroughId": "playthrough_15_12",
        "description": "Após derrotar os Vigilantes do Abismo, fale com Hawkwood para receber o Anel de Farron. Obtenha a Twinkling Dragon Torso Stone no Pico do Arquidragão, fale com Andre e derrote Hawkwood em duelo na arena dos Vigilantes do Abismo.",
        "nextLocation": "Quest Concluída!"
      }
    ]
  },
  {
    "id": "karla",
    "name": "Karla a Bruxa",
    "title": "🔮 Karla a Bruxa",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Vendedora de Feitiçarias e Piromancias Negras para a Platina)",
    "summary": "Recompensas: Vendedora essencial de Piromancias Negras, Feitiçarias Negras e Milagres Negros exigidos para os Troféus Master of Pyromancies, Master of Sorceries e Master of Miracles.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Resgate da Cela na Masmorra de Irithyll",
        "location": "Masmorra de Irithyll / Capital Profanada",
        "linkedPlaythroughId": "playthrough_9_20",
        "description": "Obtenha a Chave do Carcereiro (Jailer's Key Ring) na Capital Profanada. Vá até o andar inferior da Masmorra de Irithyll cheio de carcereiros, abra a cela de Karla e perdoe seu passado para enviá-la ao Santuário.",
        "nextLocation": "Santuário do Elo do Fogo (Abaixo das escadas perto de Cornyx)."
      }
    ]
  },
  {
    "id": "firekeeper",
    "name": "Guardiã do Fogo (Firekeeper)",
    "title": "🔥 Guardiã do Fogo (Firekeeper)",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Requisito para o Troféu O Fim da Chama / End of Fire)",
    "summary": "Recompensas: Elevação de Nível, Cura do Dark Sigil e liberação da opção do Final 'O Fim da Chama'.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Entrega dos Olhos da Guardiã do Fogo",
        "location": "Túmulos Esquecidos / Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_11_14",
        "description": "Encontre os Olhos da Guardiã do Fogo (Eyes of a Fire Keeper) na parede ilusória do Santuário Escuro nos Túmulos Esquecidos. Entregue à Guardiã do Fogo no Santuário principal para liberar a invocação dela no final do jogo.",
        "nextLocation": "Invoque a Guardiã do Fogo na fogueira final para o Troféu O Fim da Chama!"
      }
    ]
  },
  {
    "id": "andre",
    "name": "Ferreiro Andre (Blacksmith Andre)",
    "title": "🔨 Ferreiro Andre (Blacksmith Andre)",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Gesto Hurrah! | Troféu Master of Infusion | Aumento de Estus)",
    "summary": "Recompensas: Gesto Hurrah!, Reforço de Armas, Infusões para o Troféu Master of Infusion e Aprimoramento do Frasco de Estus com Estus Shards.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Gesto Hurrah! & Carvões de Infusão",
        "location": "Santuário do Elo do Fogo",
        "linkedPlaythroughId": "playthrough_1_2",
        "description": "Fale com o Ferreiro Andre no Santuário para receber o Gesto Hurrah!. Entregue os 4 Carvões de Infusão (Farron, Sage, Profaned, Giant) para liberar todas as 15 infusões da Platina.",
        "nextLocation": "Ferreiro permanente no Santuário."
      }
    ]
  },
  {
    "id": "ludleth",
    "name": "Ludleth de Courland",
    "title": "👑 Ludleth de Courland",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Transposição de Almas para Feitiços, Piromancias, Milagres e Anéis)",
    "summary": "Recompensas: Transposição de Almas dos Chefes em feitiços, piromancias, milagres e anéis exigidos para os troféus da Platina.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Obtenção do Transposition Kiln",
        "location": "Assentamento dos Mortos / Santuário",
        "linkedPlaythroughId": "playthrough_3_22",
        "description": "Derrote o chefe Grande Carvalho Corrompido no Assentamento dos Mortos para obter o Transposition Kiln. Entregue a Ludleth sentado em seu trono no Santuário para liberar a transposição de almas.",
        "nextLocation": "Permanente no trono do Santuário."
      }
    ]
  },
  {
    "id": "rosaria",
    "name": "Rosaria, Mão do Renascimento",
    "title": "🌹 Rosaria, Mão do Renascimento",
    "trophyTag": "⭐ CRÍTICO PARA A PLATINA (Pacto Dedos de Rosaria | Re-distribuição de Atributos)",
    "summary": "Recompensas: Pacto Dedos de Rosaria, Re-distribuição de pontos de atributos e aparência, e avanço na questline de Leonhard.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Encontro na Catedral das Profundezas",
        "location": "Catedral das Profundezas",
        "linkedPlaythroughId": "playthrough_5_26",
        "description": "Atravesse as vigas superiores do teto da Catedral para alcançar o Quarto de Rosaria. Fale com Rosaria para se juntar ao pacto e alterar atributos/aparência.",
        "nextLocation": "Quarto de Rosaria."
      }
    ]
  },
  {
    "id": "gael",
    "name": "Cavaleiro Escravo Gael (Slave Knight Gael)",
    "title": "❄️ Cavaleiro Escravo Gael (Slave Knight Gael)",
    "trophyTag": "❄️ NPC DE DLC (Acesso ao DLC Ashes of Ariandel)",
    "summary": "Recompensas: Permite acesso ao mapa da Pintura de Ariandel e auxílio na batalha contra Sister Friede e o Demônio da Agonia.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Altar da Capela da Purificação",
        "location": "Catedral das Profundezas",
        "linkedPlaythroughId": "playthrough_5_10",
        "description": "Fale com Gael rezando ao lado da fogueira da Capela da Purificação para ser transportado para o DLC Ashes of Ariandel.",
        "nextLocation": "Mundo Pintado de Ariandel."
      }
    ]
  },
  {
    "id": "shira",
    "name": "Shira, Cavaleira de Filianore",
    "title": "❄️ Shira, Cavaleira de Filianore",
    "trophyTag": "❄️ NPC DE DLC (Milagre Lightning Arrow | Cruz de Mad King)",
    "summary": "Recompensas: Milagre Lightning Arrow, Cruz de Mad King, Sino Sagrado de Shira e Slab de Titanita.",
    "steps": [
      {
        "stepNum": 1,
        "title": "Conversa na Porta da Cidade Anelada",
        "location": "A Cidade Anelada (The Ringed City)",
        "linkedPlaythroughId": "playthrough_14_10",
        "description": "Fale com Shira atrás da porta trancada no topo das escadas da Cidade Anelada. Aceite caçar o dragão Midir para receber o Sino Sagrado de Filianore.",
        "nextLocation": "Duelo final nas ruínas desérticas."
      }
    ]
  }
];

function renderNpcQuestsTab() {
  const container = document.getElementById('tabNPCQuests');
  if (!container) return;

  let profilesData = {};
  if (typeof profiles !== 'undefined' && profiles[profilesKey] && profiles.current && profiles[profilesKey][profiles.current]) {
    profilesData = profiles[profilesKey][profiles.current].checklistData || {};
  }

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">Início</a> &gt; <a href="#">Guias de Quests</a> &gt; <span>12 Linhas de Quest de NPCs</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">QUESTS DE NPCS | GUIA COMPLETO</h1>
    </div>

    <p class="lead">
      Guia detalhado passo a passo das 12 linhas de quest de NPCs de Dark Souls 3, com alertas de falha, badges de localização e sincronização automática com o Passo a Passo.
    </p>

    <div class="npc-quests-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 20px;">
  `;

  if (typeof NPC_QUESTS_DATA !== 'undefined') {
    NPC_QUESTS_DATA.forEach(npc => {
      html += `
        <div class="npc-quest-card" id="npc_${npc.id}">
          <h3>${npc.title}</h3>
          <p class="npc-summary-text">${npc.summary}</p>

          ${npc.failCondition ? `<div class="npc-fail-box">⚠️ <strong>Condição de Falha:</strong> ${npc.failCondition}</div>` : ''}

          <div class="npc-steps-list">
      `;

      npc.steps.forEach(step => {
        const isChecked = !!profilesData[step.linkedPlaythroughId];
        html += `
          <div class="npc-step-item ${isChecked ? 'completed-step' : ''}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" data-linked-id="${step.linkedPlaythroughId}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--fex-green); cursor: pointer; vertical-align: middle;">
                <span class="badge-npc-step">Passo ${step.stepNum}</span>
                <span class="npc-step-title">${step.title}</span>
              </div>
              <span class="npc-location-badge">📍 ${step.location}</span>
            </div>

            <p class="npc-step-desc">${step.description}</p>

            ${step.failWarning ? `<div class="badge-fail-warning">🚨 ${step.failWarning}</div>` : ''}
            ${step.nextLocation ? `<div class="npc-next-loc">➡️ <strong>Próximo Passo:</strong> ${step.nextLocation}</div>` : ''}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  container.innerHTML = html;
}

function renderNpcQuestsTab() {
  const container = document.getElementById('tabNPCQuests');
  if (!container) return;

  let profilesData = {};
  if (typeof profiles !== 'undefined' && profiles[profilesKey] && profiles.current && profiles[profilesKey][profiles.current]) {
    profilesData = profiles[profilesKey][profiles.current].checklistData || {};
  }

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">Início</a> &gt; <a href="#">Guias de Quests</a> &gt; <span>Todos os NPCs & Requisitos da Platina</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">TODOS OS NPCS | GUIA COMPLETO & PLATINA</h1>
    </div>

    <p class="lead">
      Guia completo de todos os NPCs de Dark Souls 3, com destaque claro para os NPCs críticos para os troféus da Platina, avisos de falha e sincronização com o Passo a Passo.
    </p>

    <div class="fex-subtab-bar" style="margin-bottom: 25px;">
      <button class="fex-subtab-btn active" data-npc-subtab="all">👥 Todos os NPCs</button>
      <button class="fex-subtab-btn" data-npc-subtab="trophy">⭐ Críticos para a Platina</button>
      <button class="fex-subtab-btn" data-npc-subtab="dlc">❄️ NPCs dos DLCs</button>
    </div>

    <div class="npc-quests-grid" id="npc_cards_container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 20px;">
  `;

  if (typeof NPC_QUESTS_DATA !== 'undefined') {
    NPC_QUESTS_DATA.forEach(npc => {
      const isTrophyCritical = npc.trophyTag && npc.trophyTag.includes('CRÍTICO');
      const isDlc = npc.trophyTag && npc.trophyTag.includes('DLC');

      html += `
        <div class="npc-quest-card" id="npc_${npc.id}" data-npc-type="${isTrophyCritical ? 'trophy' : (isDlc ? 'dlc' : 'standard')}">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">${npc.title}</h3>
          </div>

          ${npc.trophyTag ? `<div style="background: rgba(198, 155, 76, 0.15); border: 1px solid var(--fex-border-gold); color: var(--fex-gold-bright); padding: 6px 12px; border-radius: 4px; font-weight: 700; font-size: 0.85em; margin: 10px 0;">${npc.trophyTag}</div>` : ''}

          <p class="npc-summary-text">${npc.summary}</p>

          ${npc.failCondition ? `<div class="npc-fail-box">⚠️ <strong>Condição de Falha:</strong> ${npc.failCondition}</div>` : ''}

          <div class="npc-steps-list">
      `;

      npc.steps.forEach(step => {
        const isChecked = !!profilesData[step.linkedPlaythroughId];
        html += `
          <div class="npc-step-item ${isChecked ? 'completed-step' : ''}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" data-linked-id="${step.linkedPlaythroughId}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--fex-green); cursor: pointer; vertical-align: middle;">
                <span class="badge-npc-step">Passo ${step.stepNum}</span>
                <span class="npc-step-title">${step.title}</span>
              </div>
              <span class="npc-location-badge">📍 ${step.location}</span>
            </div>

            <p class="npc-step-desc">${step.description}</p>

            ${step.failWarning ? `<div class="badge-fail-warning">🚨 ${step.failWarning}</div>` : ''}
            ${step.nextLocation ? `<div class="npc-next-loc">➡️ <strong>Próximo Passo:</strong> ${step.nextLocation}</div>` : ''}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  container.innerHTML = html;
}

// Subtab filter handler for NPCs
$(document).on('click', '[data-npc-subtab]', function() {
  const filter = $(this).data('npc-subtab');
  $('[data-npc-subtab]').removeClass('active');
  $(this).addClass('active');

  $('.npc-quest-card').each(function() {
    const type = $(this).data('npc-type');
    if (filter === 'all') {
      $(this).show();
    } else if (filter === 'trophy' && type === 'trophy') {
      $(this).show();
    } else if (filter === 'dlc' && type === 'dlc') {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

window.renderNpcQuestsTab = renderNpcQuestsTab;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNpcQuestsTab);
} else {
  renderNpcQuestsTab();
}
