import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProjectCard = ({projectPhoto, projectName, projectPrice, projectRayting}) => {
  return (
    <View style={styles.projectCard}>
      
      {/* Project Image */}
      <View style={styles.imageWrapper}>
        <Image width={200} height={300} style={styles.projectPhoto} source={{uri: projectPhoto}} />
      </View>

      {/* Project Data */}
      <View style={styles.projectDataWrapper}>
        <Text style={styles.projectName}>{projectName}</Text>
        <View style={styles.flexWrapper}>
          <Text style={styles.projectPrice}>{projectPrice}</Text>
          <Text style={styles.projectReyting}>{projectRayting}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },

  projectCard: {
    borderRadius: '5px',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.5,
    backgroundColor: 'white',
    minWidth: '300px'
  },

  imageWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    marginBottom: '5px'
  },

  projectPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  projectDataWrapper: {
    padding: '10px'
  },

  projectName: {
    color: 'black',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: "10px"
  },

  projectPrice: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '5px'
  },

  projectReyting: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: '16px',
    fontWeight: '500'
  }
})

export default ProjectCard