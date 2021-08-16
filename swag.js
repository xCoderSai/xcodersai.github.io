mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

$(function () {

    $('#card-deck').mobiscroll().listview({
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

    $('#card-deck-cycle').mobiscroll().listview({
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

});
