import * as React from 'react';
import Gallery from 'react-native-image-gallery';

interface Props {
}

class PhotoScreen extends React.Component<Props> {
    render() {
        return (
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={[
                //{ source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
                { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                ]}
            />
        );
    }
}

export default PhotoScreen