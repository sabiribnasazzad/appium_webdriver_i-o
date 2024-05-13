const itemselector = {

    productText: '//android.widget.TextView[@text="Products"]',
    itemtoCatch: '(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView',
    catalogText: '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]',

    getCatalogItem(itemNo){
        return '//android.view.ViewGroup[@content-desc="store item"][' + itemNo + ']'
    }

}

export default itemselector