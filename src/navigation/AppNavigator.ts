import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import VideoScreen from '../screens/VideoScreen';
import AudioScreen from '../screens/AudioScreen';

export default createAppContainer(createStackNavigator({
 	Home: {
    	screen: HomeScreen,
    	navigationOptions: () => ({
			title: 'Home',
	  }),
	},
	Photo: {
    	screen: PhotoScreen,
    	navigationOptions: () => ({
			title: 'Photo',
	  }),
    },
    Video: {
    	screen: VideoScreen,
    	navigationOptions: () => ({
			title: 'Video',
	  }),
    },
    Audio: {
    	screen: AudioScreen,
    	navigationOptions: () => ({
			title: 'Audio',
	  }),
	},
}))