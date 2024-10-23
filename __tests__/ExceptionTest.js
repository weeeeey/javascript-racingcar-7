import App from '../src/App.js';
import { mockQuestions } from './testUtils.js';

describe('자동차 경주 예외 테스트', () => {
    test.each([
        ['예외 테스트', ['pobi,javaji']],
        ['이름이 5자 초과', ['pobi,toolongname', '1']],
        ['빈 이름', [',woni', '1']],
        ['중복된 이름', ['pobi,pobi', '1']],
        ['시도 횟수 음수', ['pobi,woni', '-1']],
        ['시도 횟수 소수', ['pobi,woni', '1.5']],
        ['시도 횟수 문자열', ['pobi,woni', 'abc']],
    ])('%s인 경우 에러 발생', async (testName, inputs) => {
        mockQuestions(inputs);
        const app = new App();
        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
});
