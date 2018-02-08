export default {
  updateCountAsync (store, data) {
    // console.log('asdasd')
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
