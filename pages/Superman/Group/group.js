// pages/Superman/Group/group.js
var navlist = ["帖子", "活动", "公告", "问卷"]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        navlist: navlist,
        navindex: 0,
        scrollTop: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    //   previewImage: function (e) {
    //       var current = e.target.dataset.src
    //       this.setData({
    //           imageList: [current]
    //       })
    //       wx.previewImage({
    //           current: current,
    //           urls: this.data.imageList
    //       })
    //   },
    navlist: function (e) {

        console.log(e.currentTarget.dataset.index)
        this.setData({
            navindex: e.currentTarget.dataset.index
        })
        console.log(this.data.navindex)
    },
    onPageScroll: function (e) {
        console.log(e.scrollTop);
        this.setData({
            scrollTop: e.scrollTop
        })
    }


})