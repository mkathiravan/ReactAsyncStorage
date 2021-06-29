# ReactAsyncStorage


      const[textInputValue, settextInputValue] = useState('');
      const[value, setvalue] = useState('');
        const saveValue = () => {
        if(textInputValue)
    {
      AsyncStorage.setItem('any_key_here',textInputValue);
      settextInputValue('');
      alert('Data Saved');
    }
    else
    {
      alert('Please fill data');
    }
    }

    const getValue = () => {

    AsyncStorage.getItem('any_key_here').then((value) => {
      setvalue(value);
    })
    }

![Screenshot_20210629-084404_Expo Go](https://user-images.githubusercontent.com/39657409/123732681-e0f99580-d8b7-11eb-969f-3d790f9a3f27.jpg)

![Screenshot_20210629-084414_Expo Go](https://user-images.githubusercontent.com/39657409/123732696-e656e000-d8b7-11eb-9ad6-a1fe9124ccf4.jpg)
