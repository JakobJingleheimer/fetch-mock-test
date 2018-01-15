// Returns a function which replaces the electrode extract-style config partial with the passed
// config prop. See http://www.electrode.io/docs/what_is_electrode.html#examples for info on how
// electrode's webpack config composer works

function extendElectrodeConfig(config) {
    return function(composer, options, compose) {
        composer.addPartials({
            "custom-style": {
                config: config,
            }
        });

        const base = composer.profiles._base;
        const tmp = base.partials["_extract-style"];
        tmp.enable = false;
        base.partials["custom-style"] = { order: tmp.order };

        return compose();
    };
};

module.exports = extendElectrodeConfig;
