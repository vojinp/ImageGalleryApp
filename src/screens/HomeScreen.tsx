import * as React from 'react';
import { View, StyleSheet, Button, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 10,
        fontSize: 18,
        height: 44,
    } as ViewStyle
})

interface Props {
    navigation
}

class HomeScreen extends React.Component<Props> {

    render() {
        const { navigation } = this.props

        return (
            <View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('Photo')}
                        title="Photo"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('Video')}
                        title="Video"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('Audio')}
                        title="Audio"
                    />
                </View>
            </View>
        );
    }
}

export default HomeScreen