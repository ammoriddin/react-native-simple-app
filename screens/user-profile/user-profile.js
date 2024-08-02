import React from 'react'
import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import ProjectCard from '../../components/project-card'

export default function UserProfile() {

    const projects = [
        {
            image: 'https://i.ytimg.com/vi/_mPDAQm58i8/maxresdefault.jpg',
            name: 'Goat Antony',
            price: "infinity",
            rayting: 'NaN'
        },

        {
            image: 'https://i.ytimg.com/vi/8PCwX2wRJqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDc9DBN6OTcf4xhlMroyD0IHfo1tA',
            name: 'Lionel Messi',
            price: "110 000 so'm",
            rayting: '4.5'
        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsZ28wzyXY5C-KZwdCXJZJNgIEZx35I6tFQ&s',
            name: 'Parta Cristianoooo',
            price: "560 000 so'm",
            rayting: '5'
        },
    ]

    const renderProject = ({ item }) => (
        <ProjectCard
            projectName={item.name}
            projectPrice={item.price}
            projectRayting={item.rayting}
            projectPhoto={item.image}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.profileWrapper}>
                <Image width={100} height={100} style={styles.profilePhoto} source={{ uri: 'https://cdn.britannica.com/58/156058-131-22083D0A/Adolf-Hitler.jpg?w=840&h=460&c=crop' }} />

                <View>
                    <Text style={styles.name}>Adolf Hitler</Text>
                    <Text style={styles.position}>Senior Qiruvchi</Text>
                </View>
            </View>

            <Text style={styles.projectsText}>Projects</Text>

            <FlatList
                data={projects}
                renderItem={renderProject}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.projectsWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    profileWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        marginBottom: 20,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth: 0.5,
        paddingBottom: 20,
    },

    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
    },

    position: {
        color: 'rgba(0,0,0,0.4)',
        fontSize: 16,
        fontWeight: '500'
    },

    projectsText: {
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20
    },

    projectsWrapper: {
        alignItems: 'center',
        gap: 15,
        paddingBottom: 15,
    }
})