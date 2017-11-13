export default function (state = null, action = {}) {
    if (state == null) {
        state = {
            widgets: "Some widget data"
        };
    }
    switch (action.type) {
        default : {
            return state;
        }
        break;
    }
}