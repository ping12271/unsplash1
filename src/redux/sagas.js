import {takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./reducer";
import Api from "../api";

function* sagas() {
    yield takeLatest(Action.Types.GET_PHOTOS, function* (action) {
        const result = yield call(Api.getPhotos, action.payload)
        yield put(Action.Creators.setPhotos(result.data));
    })
}

export default sagas;