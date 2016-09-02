modules.define('btn', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    console.log('There is BEM :ь');
                    this.setMod('worked', 'fine');
                }
            }
        }
    }));
});