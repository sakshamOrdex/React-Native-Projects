import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotesApp() {

    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    useEffect(() => {
        const getNotes = async () => {
            let savedNotes = await AsyncStorage.getItem('Notes');
            if (savedNotes) {
                setNotes(JSON.parse(savedNotes));
            }
        };
        getNotes();
    }, []);

    const saveToStorage = async (data) => {
        try {
            await AsyncStorage.setItem('Notes', JSON.stringify(data));
        } catch (e) {
            console.log(e);
        }
    };

    const saveNote = () => {
        if (!note.trim()) {
            alert("Please type something!");
            return;
        }

        if (editIndex !== null) {
            let updatedNotes = [...notes];
            updatedNotes[editIndex] = note;
            setNotes(updatedNotes);
            saveToStorage(updatedNotes);
            setEditIndex(null);
            alert("Note updated!");
        } else {
            let updatedNotes = [...notes, note];
            setNotes(updatedNotes);
            saveToStorage(updatedNotes);
            alert("Note saved!");
        }

        setNote("");
    };

    const deleteNote = (index) => {
        let updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        saveToStorage(updatedNotes);
    };

    const editNote = (index) => {
        setNote(notes[index]);
        setEditIndex(index);
    };

    const renderItems = ({ item, index }) => {
        return (
            <View style={styles.noteCard}>
                <Text style={styles.noteText}>{item}</Text>

                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.smallBtn} onPress={() => editNote(index)}>
                        <Text style={styles.btnText}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.smallBtn, { backgroundColor: 'red' }]}
                        onPress={() => deleteNote(index)}>
                        <Text style={styles.btnText}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.fullScreen}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>Notes App</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    value={note}
                    placeholder='Type here...'
                    onChangeText={setNote}
                    style={styles.input}
                    multiline={true}
                />

                <TouchableOpacity style={styles.btn} onPress={saveNote}>
                    <Text style={{ fontSize: RFValue(20), fontWeight: 'bold' }}>
                        {editIndex !== null ? "Update" : "Save"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <FlatList
                    data={notes}
                    renderItem={renderItems}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#1B3C53'
    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#234C6A',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    headerTxt: {
        fontSize: RFValue(30),
        fontWeight: 'bold',
        color: 'white'
    },
    inputBox: {
        marginTop: 20,
        padding: 20,
        gap: 20
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 10,
        minHeight: 50
    },
    btn: {
        backgroundColor: '#456882',
        height: 40,
        width: 120,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flex: 1,
        backgroundColor: '#456882',
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15
    },
    noteCard: {
        backgroundColor: '#1B3C53',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15
    },
    noteText: {
        color: 'white',
        fontSize: RFValue(18),
        marginBottom: 10
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10
    },
    smallBtn: {
        backgroundColor: '#234C6A',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
