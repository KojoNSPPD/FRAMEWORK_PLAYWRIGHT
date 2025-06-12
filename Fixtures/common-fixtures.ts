import {test as baseTest} from '../Fixtures/pom-fixtures';
import CommonUtils from '../utils/commonUtils';

type CommonFixturesType = {
    commonUtils : CommonUtils
}

export const test = baseTest.extend<CommonFixturesType>({
    commonUtils:async ({}, use) => {
        use(new CommonUtils());
    }
})