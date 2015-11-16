var pattern = [
  ['外套', '211', '外套', '135', '4'],
  ['外套', '211', '饰品', '466', '4'],
  ['连衣裙', '485', '鞋子', '540', '1'],
  ['连衣裙', '485', '连衣裙', '297', '6'],
  ['连衣裙', '485', '连衣裙', '369', '6'],
  ['连衣裙', '485', '连衣裙', '176', '5'],
  ['连衣裙', '487', '外套', '243', '1'],
  ['连衣裙', '487', '连衣裙', '477', '6'],
  ['连衣裙', '487', '连衣裙', '073', '5'],
  ['连衣裙', '487', '连衣裙', '110', '5'],
  ['连衣裙', '489', '饰品', '671', '1'],
  ['连衣裙', '489', '连衣裙', '474', '3'],
  ['连衣裙', '489', '连衣裙', '087', '5'],
  ['连衣裙', '489', '袜子', '238', '1'],
  ['外套', '222', '外套', '041', '3'],
  ['外套', '222', '外套', '116', '3'],
  ['外套', '222', '外套', '125', '4'],
  ['外套', '226', '袜子', '101', '3'],
  ['外套', '226', '连衣裙', '237', '3'],
  ['外套', '226', '外套', '083', '3'],
  ['下装', '204', '鞋子', '169', '4'],
  ['下装', '204', '上装', '160', '4'],
  ['外套', '243', '外套', '116', '6'],
  ['外套', '243', '外套', '036', '3'],
  ['外套', '243', '外套', '137', '4'],
  ['连衣裙', '517', '连衣裙', '176', '8'],
  ['连衣裙', '517', '连衣裙', '516', '1'],
  ['连衣裙', '517', '连衣裙', '514', '10'],
  ['连衣裙', '517', '外套', '251', '10'],
  ['连衣裙', '518', '发型', '648', '7'],
  ['连衣裙', '518', '连衣裙', '526', '3'],
  ['连衣裙', '518', '发型', '632', '4'],
  ['连衣裙', '518', '饰品', '484', '6'],
  ['连衣裙', '520', '饰品', '785', '6'],
  ['连衣裙', '520', '连衣裙', '528', '8'],
  ['连衣裙', '520', '饰品', '578', '4'],
  ['连衣裙', '520', '连衣裙', '115', '8'],
  ['外套', '254', '连衣裙', '474', '3'],
  ['外套', '254', '鞋子', '073', '3'],
  ['外套', '254', '外套', '146', '8'],
  ['连衣裙', '015', '下装', '049', '2'],
  ['连衣裙', '015', '发型', '013', '2'],
  ['连衣裙', '015', '下装', '045', '3'],
  ['连衣裙', '015', '连衣裙', '107', '3'],
  ['外套', '256', '外套', '262', '3'],
  ['外套', '256', '饰品', '578', '4'],
  ['外套', '256', '外套', '269', '5'],
  ['外套', '259', '外套', '262', '3'],
  ['外套', '259', '外套', '218', '3'],
  ['外套', '259', '外套', '086', '4'],
  ['下装', '230', '袜子', '058', '4'],
  ['下装', '230', '上装', '064', '2'],
  ['下装', '230', '发型', '071', '2'],
  ['连衣裙', '025', '上装', '007', '3'],
  ['连衣裙', '025', '下装', '229', '5'],
  ['下装', '238', '下装', '244', '3'],
  ['下装', '238', '连衣裙', '222', '1'],
  ['连衣裙', '544', '饰品', '759', '21'],
  ['连衣裙', '544', '连衣裙', '189', '7'],
  ['饰品', '449', '连衣裙', '086', '7'],
  ['饰品', '449', '饰品', '458', '1'],
  ['饰品', '449', '连衣裙', '298', '5'],
  ['饰品', '449', '上装', '294', '6'],
  ['饰品', '450', '连衣裙', '116', '5'],
  ['饰品', '450', '上装', '060', '9'],
  ['饰品', '450', '饰品', '120', '7'],
  ['饰品', '451', '饰品', '323', '5'],
  ['饰品', '451', '上装', '035', '9'],
  ['饰品', '451', '饰品', '350', '15'],
  ['连衣裙', '548', '连衣裙', '152', '4'],
  ['连衣裙', '548', '连衣裙', '119', '5'],
  ['连衣裙', '548', '连衣裙', '122', '7'],
  ['连衣裙', '037', '连衣裙', '048', '8'],
  ['连衣裙', '037', '连衣裙', '215', '5'],
  ['连衣裙', '037', '连衣裙', '114', '5'],
  ['连衣裙', '037', '连衣裙', '192', '1'],
  ['饰品', '454', '连衣裙', '098', '3'],
  ['饰品', '454', '饰品', '459', '1'],
  ['饰品', '454', '外套', '125', '3'],
  ['饰品', '454', '上装', '212', '5'],
  ['下装', '247', '下装', '049', '4'],
  ['下装', '247', '上装', '179', '6'],
  ['下装', '247', '下装', '078', '5'],
  ['连衣裙', '040', '袜子', '005', '2'],
  ['连衣裙', '040', '发型', '013', '8'],
  ['连衣裙', '040', '下装', '045', '4'],
  ['连衣裙', '040', '上装', '001', '3'],
  ['上装', '011', '连衣裙', '107', '2'],
  ['上装', '011', '上装', '001', '3'],
  ['饰品', '460', '饰品', '118', '7'],
  ['饰品', '460', '饰品', '461', '16'],
  ['上装', '013', '上装', '182', '5'],
  ['上装', '013', '上装', '160', '2'],
  ['上装', '013', '下装', '045', '3'],
  ['饰品', '462', '饰品', '317', '6'],
  ['饰品', '462', '饰品', '461', '8'],
  ['上装', '017', '外套', '001', '2'],
  ['上装', '017', '上装', '099', '10'],
  ['上装', '018', '上装', '007', '2'],
  ['上装', '018', '上装', '031', '8'],
  ['上装', '018', '上装', '001', '6'],
  ['连衣裙', '051', '下装', '228', '1'],
  ['连衣裙', '051', '鞋子', '220', '2'],
  ['连衣裙', '051', '上装', '035', '4'],
  ['连衣裙', '051', '发型', '007', '1'],
  ['下装', '260', '下装', '049', '3'],
  ['下装', '260', '下装', '282', '4'],
  ['上装', '022', '上装', '060', '6'],
  ['上装', '022', '鞋子', '147', '2'],
  ['连衣裙', '056', '上装', '160', '4'],
  ['连衣裙', '056', '连衣裙', '150', '3'],
  ['连衣裙', '056', '袜子', '024', '2'],
  ['饰品', '473', '饰品', '319', '6'],
  ['饰品', '473', '上装', '271', '3'],
  ['饰品', '473', '饰品', '321', '3'],
  ['饰品', '473', '饰品', '087', '2'],
  ['连衣裙', '062', '下装', '199', '2'],
  ['连衣裙', '062', '上装', '029', '6'],
  ['连衣裙', '063', '连衣裙', '068', '1'],
  ['连衣裙', '063', '上装', '060', '4'],
  ['连衣裙', '063', '上装', '157', '4'],
  ['连衣裙', '063', '袜子', '160', '2'],
  ['连衣裙', '065', '上装', '031', '3'],
  ['连衣裙', '065', '上装', '064', '3'],
  ['连衣裙', '065', '连衣裙', '097', '2'],
  ['连衣裙', '066', '上装', '001', '2'],
  ['连衣裙', '066', '上装', '045', '2'],
  ['连衣裙', '066', '连衣裙', '065', '2'],
  ['饰品', '483', '饰品', '487', '8'],
  ['饰品', '483', '饰品', '145', '3'],
  ['饰品', '483', '饰品', '141', '10'],
  ['饰品', '486', '饰品', '151', '8'],
  ['饰品', '486', '饰品', '487', '8'],
  ['饰品', '486', '饰品', '466', '8'],
  ['连衣裙', '071', '连衣裙', '274', '8'],
  ['连衣裙', '071', '连衣裙', '099', '1'],
  ['袜子', '008', '鞋子', '169', '9'],
  ['袜子', '008', '鞋子', '014', '6'],
  ['袜子', '008', '袜子', '044', '2'],
  ['上装', '042', '上装', '172', '4'],
  ['上装', '042', '上装', '035', '2'],
  ['上装', '042', '连衣裙', '048', '2'],
  ['连衣裙', '077', '连衣裙', '094', '2'],
  ['连衣裙', '077', '连衣裙', '025', '2'],
  ['连衣裙', '077', '上装', '208', '2'],
  ['连衣裙', '077', '连衣裙', '201', '2'],
  ['连衣裙', '080', '发型', '125', '1'],
  ['连衣裙', '080', '连衣裙', '075', '6'],
  ['连衣裙', '080', '连衣裙', '070', '6'],
  ['连衣裙', '080', '鞋子', '082', '1'],
  ['上装', '051', '袜子', '005', '2'],
  ['上装', '051', '上装', '001', '3'],
  ['连衣裙', '084', '连衣裙', '218', '2'],
  ['连衣裙', '084', '下装', '209', '3'],
  ['饰品', '504', '饰品', '145', '6'],
  ['饰品', '504', '饰品', '485', '4'],
  ['饰品', '504', '饰品', '469', '8'],
  ['饰品', '505', '饰品', '151', '6'],
  ['饰品', '505', '饰品', '492', '6'],
  ['饰品', '505', '饰品', '466', '8'],
  ['上装', '059', '上装', '138', '2'],
  ['上装', '059', '上装', '135', '2'],
  ['上装', '059', '鞋子', '145', '1'],
  ['袜子', '028', '上装', '182', '3'],
  ['袜子', '028', '上装', '001', '6'],
  ['连衣裙', '093', '连衣裙', '015', '2'],
  ['连衣裙', '093', '上装', '049', '5'],
  ['连衣裙', '093', '下装', '204', '1'],
  ['连衣裙', '094', '发型', '032', '4'],
  ['连衣裙', '094', '连衣裙', '266', '3'],
  ['饰品', '517', '饰品', '505', '5'],
  ['饰品', '517', '饰品', '519', '1'],
  ['饰品', '517', '饰品', '575', '5'],
  ['饰品', '517', '饰品', '535', '3'],
  ['上装', '070', '上装', '031', '4'],
  ['上装', '070', '上装', '160', '4'],
  ['上装', '070', '上装', '208', '2'],
  ['饰品', '520', '饰品', '144', '6'],
  ['饰品', '520', '饰品', '517', '1'],
  ['饰品', '520', '饰品', '374', '6'],
  ['饰品', '520', '饰品', '132', '6'],
  ['饰品', '524', '发型', '517', '8'],
  ['饰品', '524', '连衣裙', '126', '2'],
  ['饰品', '525', '饰品', '490', '8'],
  ['饰品', '525', '连衣裙', '392', '2'],
  ['上装', '080', '上装', '172', '2'],
  ['上装', '080', '连衣裙', '120', '3'],
  ['上装', '082', '上装', '208', '8'],
  ['上装', '082', '上装', '179', '8'],
  ['上装', '082', '上装', '105', '6'],
  ['下装', '327', '外套', '116', '2'],
  ['下装', '327', '下装', '287', '3'],
  ['下装', '327', '连衣裙', '375', '2'],
  ['下装', '327', '下装', '156', '10'],
  ['饰品', '538', '饰品', '489', '8'],
  ['饰品', '538', '连衣裙', '149', '5'],
  ['饰品', '538', '饰品', '409', '6'],
  ['下装', '333', '下装', '026', '5'],
  ['下装', '333', '下装', '233', '8'],
  ['下装', '333', '下装', '320', '6'],
  ['连衣裙', '126', '连衣裙', '138', '3'],
  ['连衣裙', '126', '连衣裙', '351', '8'],
  ['连衣裙', '126', '连衣裙', '179', '4'],
  ['连衣裙', '126', '连衣裙', '042', '3'],
  ['上装', '095', '上装', '173', '3'],
  ['上装', '095', '上装', '030', '4'],
  ['上装', '095', '上装', '036', '4'],
  ['下装', '338', '下装', '242', '6'],
  ['下装', '338', '下装', '005', '5'],
  ['下装', '338', '下装', '169', '6'],
  ['上装', '100', '上装', '101', '1'],
  ['上装', '100', '上装', '108', '4'],
  ['上装', '100', '上装', '271', '1'],
  ['上装', '100', '外套', '048', '2'],
  ['上装', '101', '上装', '208', '4'],
  ['上装', '101', '上装', '173', '4'],
  ['上装', '101', '连衣裙', '097', '2'],
  ['饰品', '552', '饰品', '121', '4'],
  ['饰品', '552', '饰品', '246', '6'],
  ['连衣裙', '137', '连衣裙', '220', '1'],
  ['连衣裙', '137', '外套', '012', '8'],
  ['连衣裙', '139', '上装', '108', '1'],
  ['连衣裙', '139', '发型', '032', '3'],
  ['上装', '108', '上装', '029', '3'],
  ['上装', '108', '外套', '008', '3'],
  ['上装', '108', '下装', '209', '3'],
  ['上装', '109', '下装', '209', '4'],
  ['上装', '109', '上装', '064', '6'],
  ['下装', '353', '下装', '362', '3'],
  ['下装', '353', '连衣裙', '117', '9'],
  ['下装', '353', '饰品', '784', '6'],
  ['饰品', '050', '饰品', '035', '1'],
  ['饰品', '050', '饰品', '403', '9'],
  ['饰品', '050', '连衣裙', '295', '3'],
  ['连衣裙', '147', '上装', '007', '2'],
  ['连衣裙', '147', '连衣裙', '035', '2'],
  ['饰品', '052', '饰品', '038', '1'],
  ['饰品', '052', '饰品', '410', '9'],
  ['饰品', '052', '饰品', '088', '3'],
  ['下装', '357', '饰品', '785', '5'],
  ['下装', '357', '连衣裙', '048', '6'],
  ['下装', '357', '发型', '192', '6'],
  ['下装', '357', '发型', '532', '2'],
  ['饰品', '054', '饰品', '016', '1'],
  ['饰品', '054', '饰品', '336', '9'],
  ['饰品', '054', '饰品', '249', '2'],
  ['饰品', '055', '饰品', '046', '1'],
  ['饰品', '055', '饰品', '404', '9'],
  ['饰品', '055', '外套', '036', '5'],
  ['上装', '120', '下装', '209', '2'],
  ['上装', '120', '连衣裙', '218', '3'],
  ['上装', '122', '上装', '167', '2'],
  ['上装', '122', '上装', '007', '6'],
  ['饰品', '572', '饰品', '334', '12'],
  ['饰品', '572', '上装', '096', '8'],
  ['饰品', '573', '饰品', '497', '4'],
  ['饰品', '573', '饰品', '122', '5'],
  ['饰品', '573', '饰品', '441', '5'],
  ['上装', '126', '上装', '007', '3'],
  ['上装', '126', '上装', '162', '3'],
  ['连衣裙', '163', '连衣裙', '110', '2'],
  ['连衣裙', '163', '连衣裙', '094', '2'],
  ['连衣裙', '165', '发型', '053', '1'],
  ['连衣裙', '165', '饰品', '200', '1'],
  ['连衣裙', '165', '袜子', '024', '6'],
  ['连衣裙', '165', '袜子', '006', '6'],
  ['连衣裙', '167', '连衣裙', '288', '2'],
  ['连衣裙', '167', '连衣裙', '227', '4'],
  ['连衣裙', '167', '外套', '146', '7'],
  ['连衣裙', '167', '饰品', '085', '2'],
  ['上装', '137', '上装', '182', '3'],
  ['上装', '137', '上装', '172', '3'],
  ['连衣裙', '171', '连衣裙', '150', '2'],
  ['连衣裙', '171', '连衣裙', '122', '4'],
  ['鞋子', '348', '鞋子', '013', '6'],
  ['鞋子', '348', '鞋子', '014', '5'],
  ['鞋子', '348', '鞋子', '001', '7'],
  ['鞋子', '350', '鞋子', '001', '2'],
  ['鞋子', '350', '鞋子', '169', '8'],
  ['鞋子', '351', '鞋子', '344', '2'],
  ['鞋子', '351', '鞋子', '147', '8'],
  ['连衣裙', '177', '下装', '104', '3'],
  ['连衣裙', '177', '连衣裙', '114', '8'],
  ['连衣裙', '177', '连衣裙', '095', '1'],
  ['连衣裙', '177', '连衣裙', '086', '4'],
  ['饰品', '596', '饰品', '244', '3'],
  ['饰品', '596', '饰品', '001', '4'],
  ['饰品', '597', '饰品', '316', '3'],
  ['饰品', '597', '饰品', '221', '4'],
  ['饰品', '598', '饰品', '409', '7'],
  ['饰品', '598', '饰品', '100', '7'],
  ['鞋子', '359', '鞋子', '235', '5'],
  ['鞋子', '359', '鞋子', '382', '7'],
  ['饰品', '600', '饰品', '177', '7'],
  ['饰品', '600', '饰品', '084', '7'],
  ['上装', '162', '上装', '179', '4'],
  ['上装', '162', '下装', '049', '4'],
  ['连衣裙', '195', '外套', '003', '3'],
  ['连衣裙', '195', '发型', '032', '3'],
  ['连衣裙', '195', '鞋子', '220', '3'],
  ['袜子', '132', '袜子', '006', '4'],
  ['袜子', '132', '袜子', '024', '4'],
  ['连衣裙', '203', '上装', '160', '6'],
  ['连衣裙', '203', '下装', '199', '9'],
  ['连衣裙', '204', '上装', '036', '2'],
  ['连衣裙', '204', '上装', '035', '3'],
  ['饰品', '110', '上装', '160', '2'],
  ['饰品', '110', '上装', '030', '2'],
  ['袜子', '144', '袜子', '006', '2'],
  ['袜子', '144', '袜子', '024', '6'],
  ['饰品', '117', '上装', '160', '10'],
  ['饰品', '117', '饰品', '217', '1'],
  ['饰品', '117', '饰品', '163', '1'],
  ['饰品', '117', '饰品', '260', '1'],
  ['鞋子', '394', '鞋子', '055', '4'],
  ['鞋子', '394', '鞋子', '456', '8'],
  ['鞋子', '394', '饰品', '321', '2'],
  ['连衣裙', '219', '连衣裙', '151', '4'],
  ['连衣裙', '219', '连衣裙', '044', '2'],
  ['连衣裙', '219', '下装', '199', '3'],
  ['连衣裙', '219', '外套', '029', '6'],
  ['连衣裙', '220', '发型', '007', '3'],
  ['连衣裙', '220', '外套', '008', '3'],
  ['连衣裙', '220', '上装', '029', '3'],
  ['连衣裙', '222', '上装', '001', '3'],
  ['连衣裙', '222', '连衣裙', '048', '3'],
  ['连衣裙', '222', '下装', '045', '2'],
  ['发型', '495', '发型', '204', '5'],
  ['发型', '495', '上装', '029', '9'],
  ['发型', '495', '发型', '152', '7'],
  ['饰品', '128', '饰品', '068', '3'],
  ['饰品', '128', '饰品', '035', '8'],
  ['饰品', '128', '饰品', '006', '8'],
  ['饰品', '128', '饰品', '120', '4'],
  ['发型', '497', '发型', '451', '12'],
  ['发型', '497', '饰品', '461', '36'],
  ['饰品', '130', '饰品', '006', '8'],
  ['饰品', '130', '饰品', '236', '8'],
  ['饰品', '130', '饰品', '238', '8'],
  ['发型', '501', '发型', '061', '9'],
  ['发型', '501', '发型', '067', '4'],
  ['发型', '501', '发型', '071', '3'],
  ['发型', '501', '发型', '293', '4'],
  ['发型', '504', '发型', '143', '5'],
  ['发型', '504', '发型', '078', '3'],
  ['鞋子', '505', '饰品', '487', '7'],
  ['鞋子', '505', '鞋子', '423', '6'],
  ['鞋子', '505', '鞋子', '340', '6'],
  ['妆容', '022', '妆容', '004', '7'],
  ['妆容', '022', '饰品', '135', '7'],
  ['发型', '508', '发型', '200', '8'],
  ['发型', '508', '发型', '506', '8'],
  ['袜子', '173', '下装', '111', '8'],
  ['袜子', '173', '下装', '115', '1'],
  ['袜子', '173', '袜子', '059', '1'],
  ['妆容', '020', '妆容', '004', '7'],
  ['妆容', '020', '饰品', '554', '1'],
  ['妆容', '020', '饰品', '552', '9'],
  ['妆容', '020', '饰品', '555', '9'],
  ['发型', '511', '发型', '194', '8'],
  ['发型', '511', '发型', '136', '8'],
  ['上装', '208', '下装', '078', '2'],
  ['上装', '208', '袜子', '005', '3'],
  ['饰品', '657', '饰品', '656', '1'],
  ['饰品', '657', '鞋子', '534', '6'],
  ['饰品', '657', '鞋子', '533', '6'],
  ['饰品', '657', '鞋子', '480', '7'],
  ['发型', '514', '发型', '540', '4'],
  ['发型', '514', '妆容', '016', '1'],
  ['发型', '514', '外套', '213', '1'],
  ['发型', '514', '发型', '534', '6'],
  ['妆容', '016', '妆容', '012', '1'],
  ['妆容', '016', '饰品', '520', '1'],
  ['妆容', '016', '妆容', '021', '7'],
  ['妆容', '016', '下装', '337', '2'],
  ['饰品', '126', '饰品', '125', '1'],
  ['饰品', '126', '饰品', '086', '4'],
  ['饰品', '126', '饰品', '096', '4'],
  ['饰品', '126', '饰品', '102', '4'],
  ['饰品', '661', '饰品', '189', '6'],
  ['饰品', '661', '饰品', '488', '6'],
  ['饰品', '661', '饰品', '438', '5'],
  ['连衣裙', '246', '连衣裙', '097', '5'],
  ['连衣裙', '246', '连衣裙', '148', '4'],
  ['连衣裙', '246', '连衣裙', '180', '1'],
  ['连衣裙', '247', '连衣裙', '274', '15'],
  ['连衣裙', '247', '饰品', '348', '1'],
  ['连衣裙', '248', '连衣裙', '222', '2'],
  ['连衣裙', '248', '外套', '021', '2'],
  ['连衣裙', '248', '下装', '135', '2'],
  ['饰品', '665', '饰品', '497', '4'],
  ['饰品', '665', '饰品', '484', '4'],
  ['饰品', '665', '饰品', '441', '5'],
  ['饰品', '666', '连衣裙', '477', '2'],
  ['饰品', '666', '饰品', '145', '3'],
  ['饰品', '666', '发型', '275', '4'],
  ['发型', '523', '发型', '518', '5'],
  ['发型', '523', '发型', '424', '7'],
  ['发型', '523', '发型', '166', '6'],
  ['鞋子', '054', '发型', '102', '1'],
  ['鞋子', '054', '鞋子', '378', '12'],
  ['鞋子', '054', '鞋子', '070', '4'],
  ['鞋子', '076', '上装', '065', '2'],
  ['鞋子', '076', '鞋子', '140', '1'],
  ['饰品', '158', '发型', '032', '8'],
  ['饰品', '158', '饰品', '070', '2'],
  ['饰品', '158', '饰品', '245', '1'],
  ['饰品', '823', '饰品', '784', '6'],
  ['饰品', '823', '饰品', '561', '5'],
  ['发型', '528', '发型', '531', '1'],
  ['发型', '528', '发型', '529', '9'],
  ['发型', '528', '发型', '124', '7'],
  ['发型', '017', '发型', '013', '4'],
  ['发型', '017', '下装', '045', '3'],
  ['饰品', '162', '上装', '179', '8'],
  ['饰品', '162', '发型', '187', '4'],
  ['饰品', '162', '上装', '182', '3'],
  ['饰品', '822', '饰品', '803', '6'],
  ['饰品', '822', '饰品', '145', '4'],
  ['饰品', '806', '饰品', '574', '2'],
  ['饰品', '805', '饰品', '574', '1'],
  ['饰品', '805', '饰品', '432', '2'],
  ['饰品', '804', '发型', '539', '1'],
  ['饰品', '804', '饰品', '429', '2'],
  ['发型', '535', '发型', '435', '6'],
  ['发型', '535', '发型', '133', '3'],
  ['饰品', '794', '饰品', '057', '8'],
  ['饰品', '794', '饰品', '121', '3'],
  ['发型', '537', '发型', '517', '3'],
  ['发型', '537', '发型', '193', '3'],
  ['发型', '537', '发型', '124', '5'],
  ['发型', '026', '发型', '170', '1'],
  ['发型', '026', '发型', '129', '3'],
  ['发型', '026', '发型', '132', '1'],
  ['发型', '026', '发型', '010', '3'],
  ['饰品', '129', '饰品', '236', '8'],
  ['饰品', '129', '饰品', '345', '8'],
  ['饰品', '129', '饰品', '177', '6'],
  ['袜子', '204', '发型', '067', '5'],
  ['袜子', '204', '袜子', '024', '9'],
  ['袜子', '204', '袜子', '140', '7'],
  ['袜子', '205', '袜子', '140', '12'],
  ['袜子', '205', '饰品', '461', '24'],
  ['饰品', '758', '饰品', '759', '10'],
  ['饰品', '758', '饰品', '118', '6'],
  ['饰品', '757', '饰品', '759', '9'],
  ['饰品', '757', '饰品', '244', '6'],
  ['发型', '544', '发型', '013', '4'],
  ['发型', '544', '发型', '076', '3'],
  ['发型', '545', '发型', '108', '7'],
  ['发型', '545', '发型', '105', '7'],
  ['发型', '546', '鞋子', '525', '4'],
  ['发型', '546', '饰品', '601', '4'],
  ['发型', '546', '连衣裙', '431', '2'],
  ['上装', '243', '下装', '209', '3'],
  ['上装', '243', '上装', '064', '5'],
  ['上装', '243', '发型', '187', '5'],
  ['上装', '243', '发型', '129', '1'],
  ['外套', '004', '下装', '045', '4'],
  ['外套', '004', '外套', '008', '5'],
  ['外套', '005', '外套', '135', '1'],
  ['外套', '005', '上装', '078', '4'],
  ['袜子', '214', '饰品', '189', '2'],
  ['袜子', '214', '下装', '161', '3'],
  ['袜子', '214', '袜子', '116', '6'],
  ['饰品', '754', '饰品', '759', '9'],
  ['饰品', '754', '饰品', '405', '5'],
  ['饰品', '753', '饰品', '759', '10'],
  ['饰品', '753', '饰品', '330', '8'],
  ['饰品', '737', '饰品', '561', '4'],
  ['饰品', '737', '鞋子', '061', '4'],
  ['饰品', '737', '鞋子', '157', '6'],
  ['饰品', '736', '饰品', '456', '3'],
  ['饰品', '736', '饰品', '466', '3'],
  ['饰品', '736', '饰品', '467', '3'],
  ['饰品', '736', '饰品', '468', '3'],
  ['发型', '043', '发型', '010', '3'],
  ['发型', '043', '发型', '443', '8'],
  ['发型', '043', '发型', '137', '3'],
  ['饰品', '735', '发型', '192', '6'],
  ['饰品', '735', '上装', '153', '5'],
  ['饰品', '735', '饰品', '057', '8'],
  ['饰品', '732', '饰品', '731', '1'],
  ['饰品', '732', '上装', '391', '5'],
  ['饰品', '732', '连衣裙', '048', '8'],
  ['饰品', '732', '饰品', '244', '10'],
  ['发型', '046', '鞋子', '025', '3'],
  ['发型', '046', '发型', '013', '3'],
  ['发型', '046', '发型', '007', '2'],
  ['外套', '015', '上装', '064', '5'],
  ['外套', '015', '外套', '009', '4'],
  ['饰品', '715', '上装', '172', '25'],
  ['饰品', '715', '饰品', '709', '1'],
  ['饰品', '715', '饰品', '710', '10'],
  ['饰品', '715', '饰品', '711', '1'],
  ['饰品', '729', '饰品', '561', '3'],
  ['饰品', '729', '饰品', '558', '4'],
  ['饰品', '729', '饰品', '441', '8'],
  ['饰品', '728', '饰品', '576', '4'],
  ['饰品', '728', '饰品', '637', '3'],
  ['饰品', '728', '饰品', '409', '8'],
  ['饰品', '716', '上装', '035', '25'],
  ['饰品', '716', '饰品', '712', '10'],
  ['饰品', '716', '饰品', '713', '1'],
  ['饰品', '716', '下装', '049', '25'],
  ['饰品', '726', '饰品', '582', '3'],
  ['饰品', '726', '饰品', '558', '3'],
  ['饰品', '726', '饰品', '177', '8'],
  ['外套', '021', '上装', '047', '4'],
  ['外套', '021', '发型', '187', '6'],
  ['饰品', '722', '饰品', '238', '10'],
  ['饰品', '722', '袜子', '024', '8'],
  ['饰品', '722', '发型', '439', '7'],
  ['饰品', '722', '饰品', '275', '10'],
  ['袜子', '231', '袜子', '121', '5'],
  ['袜子', '231', '袜子', '226', '8'],
  ['外套', '024', '下装', '045', '6'],
  ['外套', '024', '上装', '064', '10'],
  ['袜子', '233', '袜子', '210', '8'],
  ['袜子', '233', '袜子', '106', '2'],
  ['袜子', '233', '袜子', '050', '5'],
  ['饰品', '202', '连衣裙', '165', '1'],
  ['饰品', '202', '鞋子', '038', '1'],
  ['饰品', '202', '袜子', '028', '2'],
  ['饰品', '202', '上装', '022', '2'],
  ['饰品', '203', '饰品', '170', '2'],
  ['饰品', '203', '饰品', '012', '2'],
  ['袜子', '236', '外套', '102', '6'],
  ['袜子', '236', '袜子', '227', '5'],
  ['袜子', '236', '饰品', '006', '9'],
  ['袜子', '236', '袜子', '066', '6'],
  ['饰品', '205', '饰品', '065', '10'],
  ['饰品', '205', '饰品', '013', '10'],
  ['饰品', '205', '饰品', '351', '4'],
  ['饰品', '720', '袜子', '243', '1'],
  ['饰品', '720', '上装', '344', '3'],
  ['饰品', '720', '饰品', '578', '4'],
  ['饰品', '720', '饰品', '177', '6'],
  ['上装', '271', '上装', '157', '3'],
  ['上装', '271', '上装', '172', '4'],
  ['上装', '271', '连衣裙', '097', '2'],
  ['发型', '576', '发型', '367', '10'],
  ['发型', '576', '连衣裙', '486', '1'],
  ['发型', '576', '饰品', '660', '1'],
  ['外套', '033', '上装', '001', '3'],
  ['外套', '033', '上装', '179', '5'],
  ['发型', '578', '饰品', '662', '1'],
  ['发型', '578', '发型', '573', '8'],
  ['发型', '578', '发型', '492', '6'],
  ['发型', '578', '饰品', '661', '1'],
  ['外套', '035', '外套', '012', '4'],
  ['外套', '035', '连衣裙', '015', '2'],
  ['外套', '035', '连衣裙', '131', '3'],
  ['发型', '580', '发型', '424', '10'],
  ['发型', '580', '上装', '377', '1'],
  ['发型', '580', '下装', '348', '1'],
  ['发型', '581', '发型', '568', '3'],
  ['发型', '581', '连衣裙', '490', '1'],
  ['发型', '581', '发型', '275', '5'],
  ['袜子', '246', '饰品', '739', '1'],
  ['袜子', '246', '袜子', '210', '3'],
  ['袜子', '246', '袜子', '217', '3'],
  ['袜子', '246', '袜子', '202', '4'],
  ['饰品', '727', '饰品', '636', '3'],
  ['饰品', '727', '外套', '261', '3'],
  ['饰品', '727', '饰品', '408', '8'],
  ['外套', '040', '外套', '033', '2'],
  ['外套', '040', '外套', '008', '4'],
  ['下装', '009', '下装', '045', '3'],
  ['下装', '009', '上装', '038', '5'],
  ['饰品', '730', '饰品', '558', '4'],
  ['饰品', '730', '下装', '362', '3'],
  ['饰品', '730', '鞋子', '589', '7'],
  ['下装', '011', '上装', '179', '3'],
  ['下装', '011', '下装', '228', '2'],
  ['下装', '011', '连衣裙', '048', '3'],
  ['袜子', '252', '袜子', '160', '3'],
  ['袜子', '252', '袜子', '024', '4'],
  ['袜子', '252', '袜子', '001', '8'],
  ['饰品', '714', '袜子', '121', '10'],
  ['饰品', '714', '饰品', '707', '1'],
  ['饰品', '714', '饰品', '706', '10'],
  ['饰品', '714', '饰品', '708', '10'],
  ['饰品', '664', '饰品', '639', '3'],
  ['饰品', '664', '连衣裙', '369', '3'],
  ['饰品', '664', '饰品', '438', '3'],
  ['下装', '015', '下装', '049', '7'],
  ['下装', '015', '下装', '162', '1'],
  ['下装', '016', '袜子', '005', '4'],
  ['下装', '016', '上装', '001', '4'],
  ['下装', '016', '上装', '066', '2'],
  ['鞋子', '497', '鞋子', '085', '6'],
  ['鞋子', '497', '饰品', '518', '1'],
  ['鞋子', '497', '鞋子', '516', '6'],
  ['鞋子', '497', '袜子', '216', '5'],
  ['下装', '018', '外套', '008', '3'],
  ['下装', '018', '上装', '029', '3'],
  ['下装', '018', '连衣裙', '048', '3'],
  ['鞋子', '499', '饰品', '561', '4'],
  ['鞋子', '499', '鞋子', '089', '6'],
  ['鞋子', '499', '鞋子', '282', '6'],
  ['鞋子', '500', '鞋子', '449', '7'],
  ['鞋子', '500', '鞋子', '089', '6'],
  ['饰品', '663', '上装', '019', '7'],
  ['饰品', '663', '饰品', '558', '8'],
  ['饰品', '663', '下装', '320', '6'],
  ['饰品', '662', '饰品', '636', '5'],
  ['饰品', '662', '饰品', '578', '5'],
  ['饰品', '662', '饰品', '409', '5'],
  ['饰品', '656', '饰品', '655', '1'],
  ['饰品', '656', '饰品', '639', '6'],
  ['饰品', '656', '外套', '102', '10'],
  ['饰品', '656', '袜子', '201', '4'],
  ['饰品', '655', '饰品', '641', '6'],
  ['饰品', '655', '饰品', '642', '6'],
  ['饰品', '655', '饰品', '438', '5'],
  ['外套', '057', '外套', '021', '2'],
  ['外套', '057', '发型', '065', '2'],
  ['外套', '057', '外套', '008', '2'],
  ['下装', '026', '鞋子', '220', '7'],
  ['下装', '026', '外套', '001', '4'],
  ['下装', '026', '下装', '001', '4'],
  ['饰品', '599', '饰品', '141', '7'],
  ['饰品', '599', '饰品', '133', '7'],
  ['饰品', '570', '饰品', '005', '5'],
  ['饰品', '570', '外套', '116', '5'],
  ['饰品', '568', '饰品', '408', '8'],
  ['饰品', '568', '连衣裙', '156', '5'],
  ['鞋子', '510', '鞋子', '513', '1'],
  ['鞋子', '510', '鞋子', '511', '9'],
  ['鞋子', '510', '鞋子', '106', '7'],
  ['鞋子', '511', '鞋子', '025', '5'],
  ['鞋子', '511', '鞋子', '235', '6'],
  ['饰品', '562', '饰品', '118', '5'],
  ['饰品', '562', '饰品', '487', '3'],
  ['外套', '065', '发型', '187', '3'],
  ['外套', '065', '上装', '001', '3'],
  ['外套', '065', '下装', '046', '2'],
  ['发型', '610', '发型', '492', '9'],
  ['发型', '610', '发型', '609', '1'],
  ['发型', '610', '发型', '607', '10'],
  ['发型', '610', '下装', '037', '25'],
  ['饰品', '243', '上装', '179', '4'],
  ['饰品', '243', '鞋子', '277', '2'],
  ['饰品', '243', '上装', '172', '3'],
  ['发型', '612', '发型', '630', '5'],
  ['发型', '612', '发型', '532', '5'],
  ['发型', '612', '发型', '239', '9'],
  ['鞋子', '517', '鞋子', '109', '6'],
  ['鞋子', '517', '发型', '136', '4'],
  ['发型', '614', '发型', '532', '3'],
  ['发型', '614', '发型', '567', '4'],
  ['发型', '614', '连衣裙', '124', '4'],
  ['连衣裙', '343', '连衣裙', '104', '7'],
  ['连衣裙', '343', '连衣裙', '068', '7'],
  ['连衣裙', '344', '连衣裙', '148', '13'],
  ['连衣裙', '344', '饰品', '461', '40'],
  ['发型', '617', '发型', '632', '4'],
  ['发型', '617', '发型', '133', '4'],
  ['发型', '617', '发型', '108', '8'],
  ['饰品', '555', '饰品', '323', '4'],
  ['饰品', '555', '饰品', '238', '6'],
  ['外套', '075', '外套', '001', '8'],
  ['外套', '075', '外套', '012', '6'],
  ['外套', '076', '外套', '008', '4'],
  ['外套', '076', '外套', '001', '4'],
  ['外套', '076', '连衣裙', '128', '3'],
  ['发型', '109', '发型', '094', '3'],
  ['发型', '109', '发型', '192', '4'],
  ['发型', '110', '连衣裙', '001', '3'],
  ['发型', '110', '连衣裙', '044', '2'],
  ['发型', '110', '下装', '199', '3'],
  ['饰品', '549', '饰品', '035', '5'],
  ['饰品', '549', '饰品', '315', '7'],
  ['饰品', '548', '饰品', '177', '7'],
  ['饰品', '548', '饰品', '551', '1'],
  ['饰品', '548', '饰品', '549', '9'],
  ['饰品', '548', '饰品', '557', '1'],
  ['饰品', '518', '连衣裙', '376', '5'],
  ['饰品', '518', '下装', '097', '5'],
  ['饰品', '518', '饰品', '560', '5'],
  ['饰品', '518', '发型', '128', '5'],
  ['饰品', '482', '饰品', '139', '6'],
  ['饰品', '482', '饰品', '128', '3'],
  ['饰品', '481', '饰品', '273', '5'],
  ['饰品', '481', '饰品', '134', '6'],
  ['饰品', '472', '饰品', '062', '2'],
  ['饰品', '472', '下装', '260', '3'],
  ['饰品', '472', '饰品', '005', '2'],
  ['饰品', '472', '饰品', '351', '4'],
  ['饰品', '461', '饰品', '065', '2'],
  ['饰品', '461', '饰品', '035', '2'],
  ['饰品', '459', '饰品', '319', '7'],
  ['饰品', '459', '发型', '148', '7'],
  ['下装', '055', '鞋子', '014', '4'],
  ['下装', '055', '上装', '208', '4'],
  ['饰品', '453', '饰品', '323', '5'],
  ['饰品', '453', '上装', '035', '9'],
  ['饰品', '453', '饰品', '118', '7'],
  ['发型', '633', '饰品', '759', '11'],
  ['发型', '633', '发型', '061', '5'],
  ['饰品', '452', '连衣裙', '116', '5'],
  ['饰品', '452', '上装', '060', '9'],
  ['饰品', '452', '饰品', '322', '9'],
  ['发型', '123', '发型', '010', '11'],
  ['发型', '123', '发型', '180', '8'],
  ['发型', '123', '发型', '133', '2'],
  ['鞋子', '540', '袜子', '231', '1'],
  ['鞋子', '540', '鞋子', '131', '6'],
  ['鞋子', '540', '鞋子', '061', '4'],
  ['鞋子', '540', '鞋子', '486', '5'],
  ['发型', '125', '饰品', '126', '1'],
  ['发型', '125', '发型', '138', '4'],
  ['发型', '125', '发型', '135', '4'],
  ['发型', '125', '发型', '150', '4'],
  ['发型', '126', '发型', '107', '4'],
  ['发型', '126', '发型', '032', '9'],
  ['发型', '126', '发型', '192', '9'],
  ['发型', '126', '发型', '016', '4'],
  ['鞋子', '543', '鞋子', '372', '6'],
  ['鞋子', '543', '鞋子', '073', '4'],
  ['鞋子', '543', '上装', '340', '4'],
  ['鞋子', '544', '鞋子', '486', '6'],
  ['鞋子', '544', '鞋子', '533', '6'],
  ['鞋子', '544', '鞋子', '480', '7'],
  ['下装', '065', '下装', '139', '2'],
  ['下装', '065', '下装', '037', '2'],
  ['下装', '065', '下装', '067', '8'],
  ['饰品', '278', '饰品', '343', '12'],
  ['饰品', '278', '饰品', '015', '1'],
  ['发型', '131', '鞋子', '087', '3'],
  ['发型', '131', '连衣裙', '126', '3'],
  ['饰品', '276', '饰品', '346', '13'],
  ['饰品', '276', '饰品', '018', '1'],
  ['饰品', '273', '上装', '299', '2'],
  ['饰品', '273', '饰品', '003', '4'],
  ['饰品', '273', '发型', '100', '4'],
  ['鞋子', '038', '鞋子', '147', '5'],
  ['鞋子', '038', '上装', '001', '3'],
  ['饰品', '271', '上装', '288', '6'],
  ['饰品', '271', '饰品', '383', '5'],
  ['饰品', '271', '饰品', '133', '1'],
  ['饰品', '172', '饰品', '255', '1'],
  ['饰品', '172', '饰品', '008', '7'],
  ['饰品', '172', '饰品', '035', '6'],
  ['饰品', '793', '饰品', '118', '8'],
  ['饰品', '793', '饰品', '237', '3'],
  ['上装', '346', '上装', '341', '3'],
  ['上装', '346', '外套', '036', '3'],
  ['上装', '346', '连衣裙', '351', '3'],
  ['发型', '651', '发型', '204', '3'],
  ['发型', '651', '发型', '439', '4'],
  ['发型', '651', '发型', '152', '8'],
  ['饰品', '127', '饰品', '125', '1'],
  ['饰品', '127', '饰品', '089', '4'],
  ['饰品', '127', '饰品', '105', '4'],
  ['饰品', '127', '饰品', '099', '4'],
  ['妆容', '013', '饰品', '001', '5'],
  ['妆容', '013', '外套', '008', '9'],
  ['妆容', '013', '妆容', '003', '5'],
  ['发型', '654', '发型', '539', '2'],
  ['饰品', '053', '饰品', '090', '1'],
  ['饰品', '053', '饰品', '406', '9'],
  ['饰品', '053', '饰品', '098', '3'],
  ['发型', '144', '发型', '007', '4'],
  ['发型', '144', '发型', '116', '6'],
  ['上装', '353', '连衣裙', '371', '7'],
  ['上装', '353', '饰品', '134', '8'],
  ['上装', '353', '上装', '340', '6'],
  ['发型', '146', '发型', '007', '8'],
  ['发型', '146', '发型', '010', '8'],
  ['发型', '147', '发型', '032', '4'],
  ['发型', '147', '发型', '187', '4'],
  ['发型', '660', '发型', '648', '6'],
  ['发型', '660', '发型', '136', '4'],
  ['鞋子', '565', '上装', '392', '5'],
  ['鞋子', '565', '上装', '339', '3'],
  ['鞋子', '565', '下装', '318', '3'],
  ['鞋子', '565', '饰品', '457', '4'],
  ['上装', '358', '下装', '319', '4'],
  ['上装', '358', '上装', '047', '9'],
  ['上装', '358', '上装', '340', '8'],
  ['饰品', '051', '发型', '170', '1'],
  ['饰品', '051', '饰品', '351', '4'],
  ['饰品', '051', '连衣裙', '138', '3'],
  ['连衣裙', '392', '连衣裙', '349', '5'],
  ['连衣裙', '392', '连衣裙', '371', '6'],
  ['连衣裙', '392', '袜子', '040', '2'],
  ['连衣裙', '392', '饰品', '465', '8'],
  ['妆容', '025', '饰品', '759', '14'],
  ['妆容', '025', '妆容', '003', '6'],
  ['发型', '154', '发型', '010', '5'],
  ['发型', '154', '发型', '076', '3'],
  ['下装', '091', '下装', '114', '2'],
  ['下装', '091', '下装', '048', '2'],
  ['鞋子', '563', '鞋子', '372', '6'],
  ['鞋子', '563', '鞋子', '061', '3'],
  ['鞋子', '563', '鞋子', '392', '7'],
  ['连衣裙', '397', '上装', '089', '5'],
  ['连衣裙', '397', '发型', '514', '1'],
  ['连衣裙', '397', '连衣裙', '412', '5'],
  ['连衣裙', '397', '连衣裙', '418', '5'],
  ['下装', '094', '下装', '078', '9'],
  ['下装', '094', '下装', '049', '7'],
  ['下装', '094', '下装', '051', '5'],
  ['连衣裙', '399', '连衣裙', '073', '5'],
  ['连衣裙', '399', '连衣裙', '156', '5'],
  ['连衣裙', '399', '连衣裙', '176', '7'],
  ['发型', '160', '发型', '104', '4'],
  ['发型', '160', '发型', '032', '6'],
  ['鞋子', '592', '鞋子', '294', '3'],
  ['鞋子', '592', '鞋子', '169', '4'],
  ['鞋子', '592', '鞋子', '060', '8'],
  ['鞋子', '066', '鞋子', '169', '6'],
  ['鞋子', '066', '鞋子', '038', '1'],
  ['鞋子', '578', '饰品', '759', '13'],
  ['鞋子', '578', '鞋子', '344', '7'],
  ['鞋子', '568', '鞋子', '025', '4'],
  ['鞋子', '568', '鞋子', '067', '3'],
  ['鞋子', '568', '鞋子', '157', '3'],
  ['发型', '165', '发型', '078', '1'],
  ['发型', '165', '发型', '080', '4'],
  ['连衣裙', '406', '连衣裙', '409', '1'],
  ['连衣裙', '406', '连衣裙', '407', '9'],
  ['连衣裙', '406', '连衣裙', '081', '7'],
  ['连衣裙', '407', '连衣裙', '179', '5'],
  ['连衣裙', '407', '连衣裙', '122', '4'],
  ['鞋子', '564', '鞋子', '106', '3'],
  ['鞋子', '564', '鞋子', '533', '3'],
  ['鞋子', '564', '鞋子', '281', '8'],
  ['上装', '377', '鞋子', '543', '1'],
  ['上装', '377', '上装', '373', '3'],
  ['上装', '377', '鞋子', '169', '6'],
  ['上装', '377', '上装', '339', '4'],
  ['下装', '106', '下装', '049', '2'],
  ['下装', '106', '鞋子', '147', '3'],
  ['下装', '107', '下装', '108', '1'],
  ['下装', '107', '下装', '106', '3'],
  ['下装', '107', '下装', '086', '4'],
  ['下装', '107', '下装', '260', '1'],
  ['下装', '108', '下装', '286', '2'],
  ['下装', '108', '下装', '282', '6'],
  ['连衣裙', '413', '连衣裙', '020', '2'],
  ['连衣裙', '413', '饰品', '496', '3'],
  ['连衣裙', '413', '连衣裙', '138', '3'],
  ['上装', '382', '上装', '391', '3'],
  ['上装', '382', '连衣裙', '369', '4'],
  ['上装', '382', '饰品', '803', '5'],
  ['连衣裙', '415', '连衣裙', '275', '2'],
  ['连衣裙', '415', '饰品', '526', '3'],
  ['连衣裙', '415', '连衣裙', '098', '5'],
  ['鞋子', '080', '鞋子', '065', '9'],
  ['鞋子', '080', '鞋子', '147', '8'],
  ['鞋子', '080', '鞋子', '025', '2'],
  ['下装', '113', '上装', '179', '2'],
  ['下装', '113', '下装', '078', '5'],
  ['上装', '386', '外套', '262', '3'],
  ['上装', '386', '饰品', '577', '2'],
  ['上装', '386', '饰品', '786', '3'],
  ['鞋子', '595', '袜子', '216', '1'],
  ['鞋子', '595', '鞋子', '519', '2'],
  ['鞋子', '084', '鞋子', '169', '9'],
  ['鞋子', '084', '鞋子', '025', '9'],
  ['鞋子', '084', '鞋子', '004', '7'],
  ['外套', '149', '外套', '036', '3'],
  ['外套', '149', '鞋子', '025', '8'],
  ['鞋子', '562', '鞋子', '147', '25'],
  ['鞋子', '562', '鞋子', '561', '1'],
  ['鞋子', '562', '鞋子', '559', '10'],
  ['鞋子', '562', '外套', '252', '1'],
  ['外套', '151', '连衣裙', '120', '4'],
  ['外套', '151', '上装', '011', '2'],
  ['外套', '151', '上装', '227', '2'],
  ['鞋子', '542', '鞋子', '344', '8'],
  ['鞋子', '542', '鞋子', '061', '6'],
  ['鞋子', '524', '鞋子', '100', '7'],
  ['鞋子', '524', '鞋子', '092', '7'],
  ['鞋子', '523', '鞋子', '001', '3'],
  ['鞋子', '523', '鞋子', '242', '4'],
  ['鞋子', '603', '鞋子', '589', '6'],
  ['鞋子', '603', '鞋子', '089', '4'],
  ['鞋子', '495', '鞋子', '092', '6'],
  ['鞋子', '495', '鞋子', '395', '5'],
  ['鞋子', '495', '鞋子', '486', '5'],
  ['连衣裙', '429', '连衣裙', '218', '4'],
  ['连衣裙', '429', '连衣裙', '127', '3'],
  ['连衣裙', '430', '连衣裙', '035', '7'],
  ['连衣裙', '430', '连衣裙', '078', '7'],
  ['鞋子', '491', '鞋子', '215', '6'],
  ['鞋子', '491', '鞋子', '489', '5'],
  ['鞋子', '488', '鞋子', '084', '2'],
  ['鞋子', '488', '鞋子', '073', '6'],
  ['鞋子', '484', '鞋子', '186', '12'],
  ['鞋子', '484', '饰品', '461', '32'],
  ['发型', '194', '上装', '001', '4'],
  ['发型', '194', '发型', '032', '4'],
  ['鞋子', '099', '鞋子', '039', '2'],
  ['鞋子', '099', '鞋子', '171', '8'],
  ['上装', '404', '外套', '269', '6'],
  ['上装', '404', '上装', '215', '5'],
  ['鞋子', '482', '发型', '067', '5'],
  ['鞋子', '482', '袜子', '024', '9'],
  ['鞋子', '482', '鞋子', '435', '7'],
  ['鞋子', '396', '鞋子', '133', '9'],
  ['鞋子', '396', '鞋子', '402', '1'],
  ['下装', '135', '外套', '001', '3'],
  ['下装', '135', '下装', '001', '3'],
  ['下装', '135', '上装', '182', '2'],
  ['发型', '200', '连衣裙', '218', '4'],
  ['发型', '200', '上装', '064', '3'],
  ['发型', '200', '鞋子', '147', '2'],
  ['鞋子', '105', '上装', '007', '1'],
  ['鞋子', '105', '上装', '035', '4'],
  ['鞋子', '395', '鞋子', '014', '8'],
  ['鞋子', '395', '鞋子', '066', '1'],
  ['鞋子', '395', '鞋子', '025', '4'],
  ['鞋子', '078', '鞋子', '025', '3'],
  ['鞋子', '078', '鞋子', '382', '6'],
  ['鞋子', '103', '鞋子', '025', '3'],
  ['鞋子', '103', '鞋子', '001', '4'],
  ['鞋子', '087', '鞋子', '282', '8'],
  ['鞋子', '087', '饰品', '490', '5'],
  ['鞋子', '082', '饰品', '127', '1'],
  ['鞋子', '082', '鞋子', '071', '4'],
  ['鞋子', '082', '鞋子', '094', '4'],
  ['鞋子', '082', '鞋子', '108', '4'],
  ['发型', '207', '发型', '238', '1'],
  ['发型', '207', '发型', '094', '13'],
  ['发型', '207', '发型', '113', '3'],
  ['鞋子', '112', '鞋子', '025', '2'],
  ['鞋子', '112', '鞋子', '220', '6'],
  ['饰品', '865', '妆容', '028', '4'],
  ['饰品', '865', '饰品', '857', '4'],
  ['饰品', '865', '发型', '671', '4'],
  ['饰品', '865', '鞋子', '611', '4'],
  ['饰品', '866', '妆容', '028', '4'],
  ['饰品', '866', '饰品', '858', '4'],
  ['饰品', '866', '连衣裙', '565', '4'],
  ['饰品', '866', '饰品', '859', '4'],
  ['下装', '147', '下装', '223', '4'],
  ['下装', '147', '下装', '011', '1'],
  ['鞋子', '008', '下装', '278', '8'],
  ['鞋子', '008', '鞋子', '164', '1'],
  ['鞋子', '008', '鞋子', '093', '2'],
  ['袜子', '255', '袜子', '216', '2'],
  ['袜子', '213', '袜子', '207', '9'],
  ['袜子', '213', '袜子', '157', '7'],
  ['袜子', '213', '袜子', '083', '9'],
  ['袜子', '055', '袜子', '024', '9'],
  ['袜子', '055', '袜子', '006', '9'],
  ['袜子', '055', '袜子', '090', '5'],
  ['下装', '371', '饰品', '786', '6'],
  ['下装', '371', '下装', '233', '5'],
  ['下装', '348', '下装', '347', '5'],
  ['下装', '348', '连衣裙', '119', '10'],
  ['下装', '348', '下装', '318', '4'],
  ['下装', '334', '下装', '233', '4'],
  ['下装', '334', '下装', '169', '8'],
  ['下装', '334', '下装', '103', '4'],
  ['下装', '259', '下装', '078', '8'],
  ['下装', '259', '下装', '001', '6'],
  ['下装', '259', '下装', '037', '2'],
  ['下装', '143', '下装', '228', '7'],
  ['下装', '143', '下装', '227', '6'],
  ['下装', '157', '发型', '032', '2'],
  ['下装', '157', '下装', '199', '4'],
  ['下装', '102', '下装', '046', '5'],
  ['下装', '102', '下装', '049', '4'],
  ['下装', '093', '下装', '002', '3'],
  ['下装', '093', '下装', '001', '5'],
  ['下装', '088', '下装', '199', '4'],
  ['下装', '088', '下装', '045', '4'],
  ['下装', '074', '鞋子', '169', '4'],
  ['下装', '074', '下装', '045', '4'],
  ['下装', '041', '外套', '008', '3'],
  ['下装', '041', '发型', '013', '5'],
  ['上装', '354', '上装', '215', '4'],
  ['上装', '354', '上装', '096', '4'],
  ['上装', '354', '上装', '216', '7'],
  ['上装', '045', '上装', '039', '4'],
  ['上装', '045', '连衣裙', '001', '2'],
  ['上装', '045', '连衣裙', '044', '2'],
  ['外套', '215', '外套', '218', '3'],
  ['外套', '215', '外套', '055', '4'],
  ['外套', '215', '外套', '105', '6'],
  ['外套', '213', '外套', '046', '5'],
  ['外套', '213', '鞋子', '497', '1'],
  ['外套', '213', '外套', '225', '5'],
  ['外套', '213', '上装', '357', '2'],
  ['外套', '135', '上装', '030', '2'],
  ['外套', '135', '发型', '187', '3'],
  ['外套', '114', '上装', '182', '5'],
  ['外套', '114', '袜子', '024', '4'],
  ['外套', '071', '外套', '012', '4'],
  ['外套', '071', '外套', '001', '4'],
  ['外套', '034', '外套', '013', '6'],
  ['外套', '034', '外套', '012', '10'],
  ['外套', '001', '下装', '049', '1'],
  ['外套', '001', '连衣裙', '107', '2'],
  ['连衣裙', '549', '外套', '224', '2'],
  ['连衣裙', '256', '连衣裙', '128', '2'],
  ['连衣裙', '256', '连衣裙', '138', '2'],
  ['连衣裙', '256', '上装', '035', '7'],
  ['发型', '622', '发型', '630', '3'],
  ['发型', '622', '发型', '541', '2'],
  ['发型', '622', '发型', '421', '4'],
  ['发型', '529', '发型', '032', '5'],
  ['发型', '529', '发型', '107', '4'],
];