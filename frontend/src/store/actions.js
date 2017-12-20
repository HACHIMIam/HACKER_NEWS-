

export default {

        login({ commit }, creds) {
            commit("login"); // show spinner
            return new Promise(resolve => {
                setTimeout(() => {
                    commit("loginSuccess");
                    resolve();
                }, 1000);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit("logout");
        }
    }
