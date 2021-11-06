import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 
import {TouchableHighlight} from 'react-native-gesture-handler'; 
import {WebView} from 'react-native-webview'; 
 
export default class HomeScreen extends React.Component { 
    
    
    render() {  
        var index =`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="background-color: black;">
            <h1 style="color: white;">Hello world</h1>
        </body>
        </html>`;
        let htmlPath = "file:///android_asset/index.html"; //file path from native directory;
            return(
                <View style={{flex: 1}}>
                    <WebView
                    style={{flex: 1}}
                    source={{uri: htmlPath}}
                    />
                </View>
            );
    } 
} 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 

    botones: { 
        height: 40, 
        width: 300, 
        borderRadius: 10, 
        backgroundColor: '#abc', 
        marginLeft: 50, 
        marginRight: 50, 
        marginTop: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 

    texto: { 
        color: '#fff', 
        fontSize: 30, 
    }, 
});