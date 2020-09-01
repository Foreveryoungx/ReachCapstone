import * as views from "./views";

export default (st, state) => `
${views[st.view](st, state)}`;
