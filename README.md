# javascript-racingcar-precourse

# javascript-calculator-precourse

## 기능 목록 정리

자동차 경주를 진행하여 우승자를 알려주는 게임을 구현한다.

-   경주 할 자동자 이름을 입력 받는다.
    -   자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
    ```bash
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    ```
-   이동 회수를 입력 받는다.

    ```bash
    시도할 횟수는 몇 회인가요?
    5
    ```

-   전진 기능을 구현한다.

    -   0에서 9 사이의 랜덤 값을 구한다.
    -   무작위 값이 4 이상일 경우 전진이 가능하다.
    -   각 시도마다 자동차들의 진행 상황을 (-)을 통해 출력한다

    ```bash
    pobi : --
    woni : ----
    jun : ---
    ```

-   경주 완료 후 우승자를 출력한다.

    -   우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

    ```bash
    최종 우승자 : pobi
    ```

    ```bash
    최종 우승자 : pobi, jun
    ```

-   사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플레키이션을 종료한다.
    -   자동차의 이름이 공백인 경우
    -   자동차의 이름이 5자를 초과한 경우
    -   시도할 횟수가 자연수가 아닌 경우
