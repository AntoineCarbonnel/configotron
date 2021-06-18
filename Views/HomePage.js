import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {Text, View, Image} from 'react-native';
import styles from '../assets/style/mainStyle'

export class HomePage extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/img/Logo.png')}/>
                        <Title style={styles.title}>Configotron</Title>
                    </View>
                </Header>
                <View></View>
            </Container>
        );
    }
}
