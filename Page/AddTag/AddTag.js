import React, { Component, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Modal,
} from 'react-native'

  const AddTag = ({navigation, setShow}) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={show}
          //animationType="slide"
          //transparent={true}
          //visible={show}
          //onRequestClose={close}
          >
            <View style={styles.addTagBox}>
              <View style={styles.addTag}>
                <Text style={styles.addTagTitle}>
                  addTag
                </Text>
              </View>
              <View style={styles.addTagChoiceBox}>
                <TouchableHighlight 
                  style={styles.addTagChoiceButton}
                  onPress={() => {
                    this.setModalShow(!this.state.modalShow)
                  }}
                >
                  <Text style={{color: 'white', fontSize:20}}>
                    취소
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalShow(false)
          }}
        >
          <Text>show addTagBox</Text>
        </TouchableHighlight>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth: 100
  },
  addTagBox: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.5)',
    borderWidth: 10,
    height:50
  },
  addTag: {
    width: 300,
    height: 100,
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 20
  },
  addTagTitle: {
    flex: 1.5,
    width: 300,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    paddingLeft: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  addTagChoiceBox: {
    alignSelf:'baseline',
    backgroundColor: '#32CEE6',
    width: 300,
    flex: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row'
  },
  addTagChoiceButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})

export default AddTag