/**
 * Reducer 数据处理
 */
import { type } from './../action'
const initialState = {
    // cityId: '',
    menuName: '首页'
}

export default (state = initialState, action) => {
    switch(action) {
        case type.SWITCH_MENU:
            return {
                ...state, // 解构 保留之前的值，而不是直接覆盖
                menuName: action.menuName
            }
            break;
        default:
            break;
    }
}