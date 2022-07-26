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
export default function App() {
  const [code, setCode] = useState([] as number[]);
  return (
    <View style={styles.container}>
      <FullPin
        pin={{
          code,
          pinLength: 4,
          onChange: (e) => setCode(e),
          onCompleted: (e) => console.log("Completed => ", e),
          okFunction: () => console.log("OK Function"),
        }}
        styles={{}}
      />
    </View>
  );
}
```

# Demo

Some examples of using React Native Full Pin, with default styles and with personalized styles.

<div styles="display: 'flex'">
<img width=300 src="https://user-images.githubusercontent.com/72455038/175178105-67445da3-906f-431d-884a-d63340d40fab.jpg" alt="Demo Without Styles - React Native Full Pin"/>

<img  width=300 src="https://user-images.githubusercontent.com/72455038/175178217-9f74a53a-d4c6-4b28-a224-f6cc96aaa51b.jpg" alt="Demo With Styles - React Native Full Pin"/>
</div>

# Contributors

<a href="https://github.com/mariovarela99/react-native-pin/graphs/contributors">
  <h4>mariovarela99</h4>
  <img src="https://avatars.githubusercontent.com/u/72455038?s=400&u=9c0a89d3ba6eaa2eee272b1acc64573f33abe231&v=4?" width=100>
</a>


# How to contribute

- Clone the Repo
- Make your changes
- Make the Pull Request and let's see how it works.
