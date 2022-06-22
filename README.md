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

# Demo
Without Styles.

![截屏_20220623_003859_2](https://user-images.githubusercontent.com/72455038/175178105-67445da3-906f-431d-884a-d63340d40fab.jpg)

With Styles

![截屏_20220623_004046_2](https://user-images.githubusercontent.com/72455038/175178217-9f74a53a-d4c6-4b28-a224-f6cc96aaa51b.jpg)


# How to contribute

- Clone the Repo
- Make your changes
- Make the Pull Request and let's see how it works.
