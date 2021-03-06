/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findInTree: uumsServer + apiRelativePath.findInTree,
    findById: uumsServer + apiRelativePath.findById,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    updAvailable: uumsServer + apiRelativePath.updAvailable,
    remove: uumsServer + apiRelativePath.remove,
};

export default apiPath;
