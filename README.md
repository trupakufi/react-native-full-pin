# react-native-full-pin

Component to use Pin in your Apps, Easy to use, easy to customize and easy to manipulate.

# How to install

Using npm

```bash
  npm install react-native-full-pin
```

Using yarn

```bash
  yarn add react-native-full-pin
```

# Usage

```js
import { FullPin } from "react-native-full-pin";

export default function App() {
  return (
    <View>
      <FullPin
        pin={{
          pinLength: 4,
          onChange: (e) => {
            console.log("Change => ", e);
          },
          onCompleted: (e) => console.log("Completed => ", e),
        }}
        styles={{}}
      />
    </View>
  );
}
```

# How to contribute

- Clone the Repo
- Make your changes
- Make the Pull Request and let's see how it works.
