const devices = {
    iphone_x: 'iPhone X',
    moto_g4: 'Moto G4',
    iphone_5: 'iPhone5',
    iphone_12: 'iPhone12',
    ipad: 'iPad',
    ipad_pro: 'iPad Pro',
};

module.exports = devices[process.env.DEVICE];