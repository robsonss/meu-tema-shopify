const ModifyCustomStore_General = {
    data: {},

    methods: {
        init() {},

        init_load() {},

        mounted() {
            return this.methods.init();
        },

        loaded() {
            return this.methods.init_load();
        },
    },
};

jQuery(() => {
    ModifyCustomStore_General.mounted();
});

window.ModifyCustomStore_General = ModifyCustomStore_General;

window.lazyFunctions = {
    lazyScripts() {
        document.querySelectorAll('.e-lazy-script').forEach((script) => {
            script.src = script.getAttribute('data-src');
        });
    },
};
