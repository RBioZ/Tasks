/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskList from './src/screens/TaskList';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => TaskList);
