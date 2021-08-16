mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

mobiscroll.listview('#card-deck', {
    stages: [{
        percent: -20,
        action: function (event, inst) {
            inst.remove(event.target);
            return false;
        }
    }, {
        percent: 20,
        action: function (event, inst) {
            inst.remove(event.target);
            return false;
        }
    }],
    actionable: false
});

mobiscroll.listview('#card-deck-cycle', {
    stages: [{
        percent: -20,
        action: function (event, inst) {
            inst.move(event.target, 0);
            return false;
        }
    }, {
        percent: 20,
        action: function (event, inst) {
            inst.move(event.target, 0);
            return false;
        }
    }],
    actionable: false
});
