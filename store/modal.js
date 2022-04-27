export const state = () => ({
  imgData: "",
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
  setImageModal: (state, { img }) => {
    state.imgData = img;
  },
};

export const getters = {
  isModalActived: (state) => {
    return {
        modal: state.showModal,
        scroll: state.pageScroll
    };
  },
  getImageModal: (state) => {
    return state.imgData
  }
};
