## 워크스페이스 내의 패키지들 import 안되는 이슈

tsconfig의 include에 package 경로를 넣으면 됨
ex)

```
  "include": [
    "../../packages/**/*.ts",
    "../../packages/**/*.tsx"
  ],
```

## 워크스페이스 내의 패키지들을 import 할 때 타입이 안나오는 이슈

index.d.ts에 해당 패키지 import 하면 됨

```
import "@dotoriham/ui"
```
