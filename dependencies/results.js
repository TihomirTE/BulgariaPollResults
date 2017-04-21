function results() {
let resultsData = { 
    PartiesResults: {
        1:{name:"ПП ДРОМ", number: 1, result: 0.15, mandads: 0},
        2:{name:"ПП ДВИЖЕНИЕ ЗА РАДИКАЛНА ПРОМЯНА БЪЛГАРСКАТА ПРОЛЕТ", number: 2, result: 0.27, mandads: 0},
        3:{name:"ПОЛИТИЧЕСКА ПАРТИЯ ДВИЖЕНИЕ НАПРЕД БЪЛГАРИЯ", number: 3, result: 0.19, mandads: 0},
        4:{name:"НОВА РЕПУБЛИКА – ДСБ, СЪЮЗ ЗА ПЛОВДИВ, БЪЛГАРСКА ДЕМОКРАТИЧНА ОБЩНОСТ", number: 4, result: 2.54, mandads: 0},
        5:{name:"КОАЛИЦИЯ НА НЕДОВОЛНИТЕ (БСД - ЕВРОЛЕВИЦА, БЪЛГАРСКА СОЦИАЛДЕМОКРАТИЧЕСКА ПАРТИЯ, ХРИСТИЯН-СОЦИАЛЕН СЪЮЗ", number: 5, result: 0.17, mandads: 0},
        6:{name:"ВОЛЯ", number: 6, result: 4.26, mandads: 6},
        7:{name:"ПП БЪЛГАРСКИ ДЕМОКРАТИЧЕН ЦЕНТЪР - БДЦ", number: 7, result: 0.09, mandads: 0},
        8:{name:"КОАЛИЦИЯ АБВ – ДВИЖЕНИЕ 21", number: 8, result: 1.59, mandads: 0},
        9:{name:"ДВИЖЕНИЕ ЗА ПРАВА И СВОБОДИ – ДПС", number: 9, result: 9.24, mandads: 26},
        10:{name:"БСП ЗА БЪЛГАРИЯ", number: 10, result: 27.93, mandads: 80},
        11:{name:"ПП ГЕРБ", number: 11, result: 33.54, mandads: 95},
        12:{name:"ПАРТИЯ НА ЗЕЛЕНИТЕ", number: 12, result: 0.30, mandads: 0},
        13:{name:"ОБЕДИНЕНИЕ ДОСТ", number: 13, result: 2.94, mandads: 0},
        14:{name:"ПП ВЪЗРАЖДАНЕ", number: 14, result: 1.11, mandads: 0},
        15:{name:"ПРЕЗАРЕДИ БЪЛГАРИЯ", number: 15, result: 0, mandads: 0},
        16:{name:"КП ДВИЖЕНИЕ ДА БЪЛГАРИЯ (ЗЕЛЕНИТЕ, ДЕОС)", number: 16, result: 2.96, mandads: 0},
        17:{name:"ОБЕДИНЕНИ ПАТРИОТИ – НФСБ, АТАКА И ВМРО", number: 17, result: 9.31, mandads: 27},
        18:{name:"КОЙ – БЪЛГАРСКАТА ЛЕВИЦА И ЗЕЛЕНА ПАРТИЯ", number: 18, result: 0.09, mandads: 0},
        19:{name:"ПП НАЦИОНАЛНА РЕПУБЛИКАНСКА ПАРТИЯ", number: 19, result: 0.07, mandads: 0},
        20:{name:"БЪЛГАРСКО НАЦИОНАЛНО ОБЕДИНЕНИЕ", number: 20, result: 0.11, mandads: 0},
        21:{name:"РЕФОРМАТОРСКИ БЛОК – ГЛАС НАРОДЕН", number: 21, result: 3.14, mandads: 0}
    },
    ResultsByRegion: {
        1:{id: 1,population: 310321,name_eng: "Blagoevgrad",name_bg: "Благоевград", results:
            {1:{name: "ПП ГЕРБ", result: 37.48, number: 11},
             2:{name: "БСП за България", result: 23.24},
             3:{name: "ДПС", result: 13.47},
             4:{name: "Обединени патриоти ", result: 9.25},
             5:{name: "Реформаторски блок – Глас народен", result: 2.72}
            }
        },
        2:{id: 2,population: 412684,name_eng: "Burgas",name_bg: "Бургас", results:
            {1:{name: "ПП ГЕРБ", result: 35.74, number: 11},
             2:{name: "БСП за България", result: 23.08},
             3:{name: "Обединени патриоти ", result: 10.17},
             4:{name: "ДПС", result: 10.10},
             5:{name: "ДОСТ", result: 5.22}
            }
        },
        8:{id: 8,population: 178438,name_eng: "Dobrich",name_bg: "Добрич", results:
            {1:{name: "БСП за България", result: 30.23, number: 10},
             2:{name: "ПП ГЕРБ", result: 25.87},             
             3:{name: "Обединени патриоти ", result: 11.28},
             4:{name: "ДПС", result: 10.15},
             5:{name: "Воля", result: 7.57}
            }
        },
        7:{id: 7,population: 112334,name_eng: "Gabrovo",name_bg: "Габрово", results:
            {1:{name: "ПП ГЕРБ", result: 40.01, number: 11},
             2:{name: "БСП за България", result: 27.43},
             3:{name: "Обединени патриоти ", result: 9.61},
             4:{name: "Воля", result: 6.70},
             5:{name: "ДПС", result: 3.80},
            }
        },
        23:{id: 7,population: 1323637,name_eng: "Sofia",name_bg: "София", results:
            {1:{name: "ПП ГЕРБ", result: 33.54, number: 11},
             2:{name: "БСП за България", result: 25.35},
             3:{name: "Движения Да, България", result: 10.03},
             4:{name: "Обединени патриоти", result: 7.22},
             5:{name: "Нова република", result: 6.90},
            }
        },
        29:{id: 29,population: 233415,name_eng: "Haskovo",name_bg: "Хасково", results:
            {1:{name: "ПП ГЕРБ", result: 31.50, number: 11},
             2:{name: "БСП за България", result: 30.07},
             3:{name: "ДПС", result: 12.14},
             4:{name: "Обединени патриоти ", result: 8.78},
             5:{name: "Реформаторски блок – Глас народен", result: 4.58},
             
            }
        },
        9:{id: 9,population: 150837,name_eng: "Kardzhali",name_bg: "Кърджали", results:
            {1:{name: "ДПС", result: 44.92, number: 9},
             2:{name: "ДОСТ", result: 21.59},
             3:{name: "ПП ГЕРБ", result: 16.32},
             4:{name: "БСП за България", result: 9.70},
             5:{name: "Обединени патриоти ", result: 2.66},        
             
            }
        },
        10:{id: 10,population: 123431,name_eng: "Kuystendil",name_bg: "Кюстендил", results:
            {1:{name: "ПП ГЕРБ", result: 37.73, number: 11},
             2:{name: "БСП за България", result: 34.99},
             3:{name: "Обединени патриоти ", result: 8.39},
             4:{name: "Реформаторски блок – Глас народен", result: 3.81},
             5:{name: "Воля", result: 3.45},
            }
        },
        11:{id: 11,population: 129222,name_eng: "Lovech",name_bg: "Ловеч", results:
            {1:{name: "ПП ГЕРБ", result: 32.74, number: 11},
             2:{name: "БСП за България", result: 29.89},
             3:{name: "ДПС", result: 11.78},
             4:{name: "Обединени патриоти ", result: 10.21},    
             5:{name: "Воля", result: 4.26},
            }
        },
        12:{id: 12,population: 134669,name_eng: "Montana",name_bg: "Монтана", results:
            {1:{name: "БСП за България", result:33.60, number: 10},
             2:{name: "ПП ГЕРБ", result: 27.73},
             3:{name: "ДПС", result: 12.35},
             4:{name: "Реформаторски блок-Глас народен", result: 7.23},    
             5:{name: "Обединени патриоти", result: 7.12},
            }
        },
        13:{id: 13,population: 260814,name_eng: "Pazardjik",name_bg: "Пазарджик", results:
            {1:{name: "ПП ГЕРБ", result: 34.62, number: 11},
             2:{name: "БСП за България", result: 29.67},
             3:{name: "ДПС", result: 12.06},
             4:{name: "Обединени патриоти ", result: 8.89},    
             5:{name: "Воля", result: 3.15},
            }
        },
        14:{id: 14,population: 123770,name_eng: "Pernik",name_bg: "Перник", results:
            {1:{name: "ПП ГЕРБ", result: 34.50, number: 11},
             2:{name: "БСП за България", result: 33.83},
             3:{name: "Обединени патриоти ", result: 7.86},    
             4:{name: "Воля", result: 5.02},
             5:{name: "Реформаторски блок-Глас народен", result: 4.92}
            }
        },
        15:{id: 15,population: 248138,name_eng: "Pleven",name_bg: "Плевен", results:
            {1:{name: "БСП за България", result: 31.66, number: 10},
             2:{name: "ПП ГЕРБ", result: 31.08},
             3:{name: "Обединени патриоти ", result: 12.17},    
             4:{name: "ДПС", result: 5.87},
             5:{name: "Воля", result: 3.48}
            }
        },
        16:{id: 16,population: 671573,name_eng: "Plovdiv",name_bg: "Пловдив", results:
            {1:{name: "ПП ГЕРБ", result: 38.78, number: 11},
             2:{name: "БСП за България", result: 25.98},
             3:{name: "Обединени патриоти ", result: 10.00},    
             4:{name: "Воля", result: 4.53},
             5:{name: "Движения Да, България", result: 4.26}
            }
        },
        18:{id: 18,population: 115402,name_eng: "Razgrad",name_bg: "Разград", results:
            {1:{name: "ДПС", result: 33.87, number: 9},
             2:{name: "ПП ГЕРБ", result: 25.29},
             3:{name: "БСП за България", result: 15.16},    
             4:{name: "ДОСТ", result: 7.44},
             5:{name: "Обединени патриоти", result: 5.73}
            }
        },
        19:{id: 19,population: 223489,name_eng: "Ruse",name_bg: "Русе", results:
            {1:{name: "ПП ГЕРБ", result: 31.42, number: 11},
             2:{name: "БСП за България", result: 27.71},
             3:{name: "Обединени патриоти ", result: 13.32},    
             4:{name: "ДПС", result: 7.20},
             5:{name: "Воля", result: 3.66}
            }
        },
        30:{id: 30,population: 174476,name_eng: "Shumen",name_bg: "Шумен", results:
            {1:{name: "ПП ГЕРБ", result: 28.00, number: 11},
             2:{name: "БСП за България", result: 22.01},
             3:{name: "ДПС", result: 20.41},    
             4:{name: "Обединени патриоти", result: 8.25},
             5:{name: "Воля", result: 4.48}
            }
        },
        20:{id: 20,population: 111957,name_eng: "Silistra",name_bg: "Силистра", results:
            {1:{name: "ПП ГЕРБ", result: 29.87, number: 11},
             2:{name: "ДПС", result: 22.54},
             3:{name: "БСП за България", result: 22.26},    
             4:{name: "Обединени патриоти", result: 10.07},
             5:{name: "ДОСТ", result: 4.91}
            }
        },
        21:{id: 21,population: 189788,name_eng: "Sliven",name_bg: "Сливен", results:
            {1:{name: "ПП ГЕРБ", result: 35.37, number: 11},
             2:{name: "БСП за България", result: 31.93},
             3:{name: "Обединени патриоти", result: 10.58},    
             4:{name: "ДПС", result: 5.46},
             5:{name: "Воля", result: 3.75}
            }
        },
        22:{id: 22,population: 109425,name_eng: "Smolyan",name_bg: "Смолян", results:
            {1:{name: "ПП ГЕРБ", result: 35.77, number: 11},
             2:{name: "БСП за България", result: 27.47},
             3:{name: "ДПС", result: 17.37},    
             4:{name: "Обединени патриоти", result: 4.47},
             5:{name: "Воля", result: 3.56}
            }
        },
        26:{id: 26,population: 234185,name_eng: "Sofia oblast",name_bg: "София област", results:
            {1:{name: "ПП ГЕРБ", result: 36.65, number: 11},
             2:{name: "БСП за България", result: 32.10},
             3:{name: "Обединени патриоти", result: 8.85},    
             4:{name: "ДПС", result: 4.56},
             5:{name: "Воля", result: 3.45}
            }
        },
        27:{id: 27,population: 321377,name_eng: "Stara Zagora",name_bg: "Стара Загора", results:
            {1:{name: "ПП ГЕРБ", result: 34.14, number: 11},
             2:{name: "БСП за България", result: 30.69},
             3:{name: "Обединени патриоти", result: 9.89},    
             4:{name: "ДПС", result: 7.80},
             5:{name: "Воля", result: 3.99}
            }
        },
        28:{id: 28,population: 113694,name_eng: "Targovishte",name_bg: "Тарговище", results:
            {1:{name: "ДПС", result: 33.28, number: 9},
             2:{name: "ПП ГЕРБ", result: 21.42},
             3:{name: "БСП за България", result: 21.01},    
             4:{name: "ДОСТ", result: 7.08},
             5:{name: "Обединени патриоти", result: 6.64}
            }
        },
        3:{id: 3,population: 472654,name_eng: "Varna",name_bg: "Варна", results:
            {1:{name: "ПП ГЕРБ", result: 33.01, number: 11},
             2:{name: "БСП за България", result: 24.96},
             3:{name: "Воля", result: 11.76},    
             4:{name: "Обединени патриоти", result: 9.15},
             5:{name: "ДПС", result: 6.21}
            }
        },
        4:{id: 4,population: 242259,name_eng: "Veliko Tarnovo",name_bg: "Велико Търново", results:
            {1:{name: "БСП за България", result: 33.85, number: 10},
             2:{name: "ПП ГЕРБ", result: 30.14},
             3:{name: "Обединени патриоти", result: 11.03},    
             4:{name: "ДПС", result: 6.43},
             5:{name: "Воля", result: 4.27}
            }
        },
        5:{id: 5,population: 88867,name_eng: "Vidin",name_bg: "Видин", results:
            {1:{name: "БСП за България", result: 38.02, number: 10},
             2:{name: "ПП ГЕРБ", result: 27.84},
             3:{name: "Обединени патриоти", result: 7.46},    
             4:{name: "ДПС", result: 6.09},
             5:{name: "Реформаторски блок – Глас народен", result: 3.69}
            }
        },
        6:{id: 6,population: 168727,name_eng: "Vraca",name_bg: "Враца", results:
            {1:{name: "БСП за България", result: 35.03, number: 10},
             2:{name: "ПП ГЕРБ", result: 33.37},
             3:{name: "Обединени патриоти", result: 9.52},    
             4:{name: "Реформаторски блок – Глас народен", result: 5.58},
             5:{name: "ДПС", result: 4.42}
            }
        },
        31:{id: 31,population: 122276,name_eng: "Yambol",name_bg: "Ямбол", results:
            {1:{name: "БСП за България", result: 38.67, number: 10},
             2:{name: "ПП ГЕРБ", result: 30.68},
             3:{name: "Обединени патриоти", result: 13.64},    
             4:{name: "ДПС", result: 2.92},
             5:{name: "Воля", result: 2.61}
            }
        },
    },
    VotingActivity: {
        10:{activity: 8.44},
        13:{activity: 25.7},
        17:{activity: 42.74},
        Total:{activity: 54.07},
    }
}
    return resultsData;
}

export { results };



