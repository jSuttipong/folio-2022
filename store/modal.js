export const state = () => ({
  imageName: "",
  pageScroll: true,
  showModal: false,
});

export const actions = {

};

export const mutations = {
  setModalShow: (state, { value }) => {
    state.showModal = value;
  },
  setPageScroll: (state, { value }) => {
    state.pageScroll = value;
  },
};

export const getters = {
  isModalActived: (state) => {
    return {
        modal: state.showModal,
        scroll: state.pageScroll
    };
  },
};
