export default [
  [0.01, 'nul komma nul een'],
  [1.007, 'een komma nul nul zeven'],
  [1.7, 'een komma zeven'],
  [17.42, 'zeventien komma tweeënveertig'],
  [27.312, 'zevenentwintig komma driehonderdtwaalf'],
  [53.486, 'drieënvijftig komma vierhonderdzesentachtig'],
  [300.42, 'driehonderd komma tweeënveertig'],
  [4196.42, 'eenenveertighonderd zesennegentig komma tweeënveertig'],

  [-17.42, 'min zeventien komma tweeënveertig'],
  [-1, 'min een'],
  [-20, 'min twintig'],

  [0, 'nul'],
  [1, 'een'],
  [2, 'twee'],
  [3, 'drie'],
  [11, 'elf'],
  [12, 'twaalf'],
  [16, 'zestien'],
  [19, 'negentien'],
  [20, 'twintig'],
  [21, 'eenentwintig'],
  [26, 'zesentwintig'],
  [28, 'achtentwintig'],
  [30, 'dertig'],
  [31, 'eenendertig'],
  [40, 'veertig'],
  [44, 'vierenveertig'],
  [50, 'vijftig'],
  [55, 'vijfenvijftig'],
  [60, 'zestig'],
  [67, 'zevenenzestig'],
  [70, 'zeventig'],
  [79, 'negenenzeventig'],
  [89, 'negenentachtig'],
  [95, 'vijfennegentig'],
  [100, 'honderd'],
  [101, 'honderdeen'],
  [101, 'honderdeneen', {includeOptionalAnd: true}],
  [111, 'honderdelf'],
  [111, 'honderdenelf', {includeOptionalAnd: true}],
  [112, 'honderdtwaalf'],
  [112, 'honderdentwaalf', {includeOptionalAnd: true}],
  [113, 'honderddertien'],
  [113, 'honderddertien', {includeOptionalAnd: true}],
  [199, 'honderdnegenennegentig'],
  [200, 'tweehonderd'],
  [235, 'tweehonderdvijfendertig'],
  [203, 'tweehonderddrie'],
  [203, 'tweehonderdendrie', {includeOptionalAnd: true}],
  [242, 'tweehonderdtweeënveertig'],
  [287, 'tweehonderdzevenentachtig'],
  [356, 'driehonderdzesenvijftig'],
  [400, 'vierhonderd'],
  [434, 'vierhonderdvierendertig'],
  [578, 'vijfhonderdachtenzeventig'],
  [689, 'zeshonderdnegenentachtig'],
  [729, 'zevenhonderdnegenentwintig'],
  [894, 'achthonderdvierennegentig'],
  [999, 'negenhonderdnegenennegentig'],
  [1000, 'duizend'],
  [1001, 'duizend een'],
  [1001, 'duizend en een', {includeOptionalAnd: true}],
  [1010, 'duizend tien'],
  [1010, 'duizend en tien', {includeOptionalAnd: true}],
  [1012, 'duizend twaalf'],
  [1012, 'duizend en twaalf', {includeOptionalAnd: true}],
  [1013, 'duizend dertien'],
  [1013, 'duizend dertien', {includeOptionalAnd: true}],
  [1097, 'duizend zevenennegentig'],
  [1104, 'elfhonderd vier'],
  [1104, 'elfhonderd en vier', {includeOptionalAnd: true}],
  [1104, 'duizend honderdvier', {noHundredPairs: true}],
  [
    1104,
    'duizend honderdenvier',
    {noHundredPairs: true, includeOptionalAnd: true},
  ],
  [1243, 'twaalfhonderd drieënveertig'],
  [1243, 'duizend tweehonderddrieënveertig', {noHundredPairs: true}],
  [1700, 'zeventienhonderd'],
  [2385, 'drieëntwintighonderd vijfentachtig'],
  [2385, 'tweeduizend driehonderdvijfentachtig', {noHundredPairs: true}],
  [3766, 'zevenendertighonderd zesenzestig'],
  [3766, 'drieduizend zevenhonderdzesenzestig', {noHundredPairs: true}],
  [4196, 'eenenveertighonderd zesennegentig'],
  [4196, 'vierduizend honderdzesennegentig', {noHundredPairs: true}],
  [5846, 'achtenvijftighonderd zesenveertig'],
  [5846, 'vijfduizend achthonderdzesenveertig', {noHundredPairs: true}],
  [6028, 'zesduizend achtentwintig'],
  [6459, 'vierenzestighonderd negenenvijftig'],
  [6459, 'zesduizend vierhonderdnegenenvijftig', {noHundredPairs: true}],
  [7232, 'tweeënzeventighonderd tweeëndertig'],
  [7232, 'zevenduizend tweehonderdtweeëndertig', {noHundredPairs: true}],
  [8569, 'vijfentachtighonderd negenenzestig'],
  [8569, 'achtduizend vijfhonderdnegenenzestig', {noHundredPairs: true}],
  [9539, 'vijfennegentighonderd negenendertig'],
  [9539, 'negenduizend vijfhonderdnegenendertig', {noHundredPairs: true}],
  [28000, 'achtentwintigduizend'],
  [28064, 'achtentwintigduizend vierenzestig'],
  [100000, 'honderdduizend'],
  [115000, 'honderdvijftienduizend'],
  [271850, 'tweehonderdeenenzeventigduizend achthonderdvijftig'],
  [381000, 'driehonderdeenentachtigduizend'],
  [500000, 'vijfhonderdduizend'],
  [1000000, 'een miljoen'],
  [1000001, 'een miljoen een'],
  [1000001, 'een miljoen en een', {includeOptionalAnd: true}],
  [4000000, 'vier miljoen'],
  [4323000, 'vier miljoen driehonderddrieëntwintigduizend'],
  [4323055, 'vier miljoen driehonderddrieëntwintigduizend vijfenvijftig'],
  [1570025, 'een miljoen vijfhonderdzeventigduizend vijfentwintig'],
  [4000000000, 'vier miljard'],
  [1000000000, 'een miljard'],
  [2580000000, 'twee miljard vijfhonderdtachtig miljoen'],
  [5200000000, 'vijf miljard tweehonderd miljoen'],
  [
    347625728221,
    'driehonderdzevenenveertig miljard zeshonderdvijfentwintig miljoen' +
    ' zevenhonderdachtentwintigduizend tweehonderdeenentwintig',
  ],
  [1000000000000, 'een biljoen'],
  [3627000000000, 'drie biljoen zeshonderdzevenentwintig miljard'],
  [10000000000000, 'tien biljoen'],
  [100000000000000, 'honderd biljoen'],
  [
    4500072900000111,
    'vier biljard vijfhonderd biljoen tweeënzeventig miljard negenhonderd' +
    ' miljoen honderdelf',
  ],
  [
    4500072900000111,
    'vier biljard vijfhonderd biljoen tweeënzeventig miljard negenhonderd' +
    ' miljoen honderdenelf',
    {includeOptionalAnd: true},
  ],
  [1000000000000000000n, 'een triljoen'],
];
