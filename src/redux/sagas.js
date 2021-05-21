import {takeLatest, call, put, all} from 'redux-saga/effects';
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

    yield takeLatest(Action.Types.GET_TOPICS, function* ({payload}) {
        const result = yield call(Api.getTopics, payload);
        if(result.data) {
            yield put(Action.Creators.setTopics(result.data));
        }
    });

    yield takeLatest(Action.Types.OPEN_PHOTO_POPUP, function* ({payload}) {
        const [photoByIdResult, photoRelatedResult] = yield all([
            call(Api.getPhotoById, payload),
            call(Api.getPhotoRelated, payload)
        ])
        if(photoByIdResult.data) {
            yield put(Action.Creators.setPhotoById(photoByIdResult.data));
        }
        if(photoRelatedResult.data) {
            yield put(Action.Creators.setPhotoRelated(photoRelatedResult.data));
        }

        yield put(Action.Creators.updateState({
            photoPopup: true
        }))
    })
}

export default sagas;