import {takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./reducer";
import Api from "../api";

function* sagas() {
    yield takeLatest(Action.Types.GET_PHOTOS, function* (action) {
        const result = yield call(Api.getPhotos, action.payload);
        if(result.data) {
            yield put(Action.Creators.setPhotos(result.data));
        }
    });
    yield takeLatest(Action.Types.SEARCH_PHOTOS, function* (action) {
       const result = yield call(Api.searchPhotos, action.payload);
        if(result.data) {
            yield put(Action.Creators.setSearchResult(result.data));
        }
    });
    yield takeLatest(Action.Types.GET_TOPIC_BY_SLUG, function* (action) {
        const result = yield call(Api.getTopicBySlug, action.slug, action.payload);
        if(result.data) {
            yield put(Action.Creators.setTopicBySlug(result.data))
        }
    });
    yield takeLatest(Action.Types.GET_TOPICS_PHOTOS, function* (action) {
        const result = yield call(Api.getTopicsPhotos, action.payload);
        if(result.data) {
            yield put(Action.Creators.setTopicsPhotos(result.data));
        }
    });
}

export default sagas;