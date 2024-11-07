import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ title, text, icon_name, poster, items, onSelect }) => {
    return (
        <View style={styles.questionContainer}>
            <Image source={poster} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{text}</Text>
            <View style={styles.textContainer}></View>
            <Icon name={icon_name} size={30} color="#B23B23" style={styles.icon} />
            <RNPickerSelect
                onValueChange={onSelect}
                items={items}
                style={pickerSelectStyles}
            />
        </View>
    );
};

const QuestionInfo = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const questions = [
        {
            id: '1',
            title: "Can you identify who am I?",
            text: "I buzz through the garden, the sun warms my delicate wings, and I land on a vibrant flower, savoring the sweet nectar that fuels my busy day.",
            poster: require('./img/bee.jpg'),
            correctAnswer: 'bee',
            items: [
                { label: 'Bee', value: 'bee' },
                { label: 'Crocodile', value: 'crocodile' },
                { label: 'Deer', value: 'deer' },
                { label: 'Elephant', value: 'elephant' },
                { label: 'Giraffe', value: 'giraffe' },
                { label: 'Hummingbird', value: 'hummingbird' },
                { label: 'Kingfisher', value: 'kingfisher' },
                { label: 'Leopard', value: 'leopard' },
                { label: 'Owl', value: 'owl' },
                { label: 'Peacock', value: 'peacock' },
                { label: 'Penguin', value: 'penguin' },
                { label: 'Rabbit', value: 'rabbit' },
                { label: 'Zebra', value: 'zebra' },
            ],
        },
        {
            id: '2',
            title: "Can you identify who am I?",
            text: "With my long neck reaching high, I nibble on leaves from the tallest trees, surveying the savanna around me.",
            poster: require('./img/giraffe.jpg'),
            correctAnswer: 'giraffe',  // Correct answer
            items: [
                { label: 'Bee', value: 'bee' },
                { label: 'Crocodile', value: 'crocodile' },
                { label: 'Deer', value: 'deer' },
                { label: 'Elephant', value: 'elephant' },
                { label: 'Giraffe', value: 'giraffe' },
                { label: 'Hummingbird', value: 'hummingbird' },
                { label: 'Kingfisher', value: 'kingfisher' },
                { label: 'Leopard', value: 'leopard' },
                { label: 'Owl', value: 'owl' },
                { label: 'Peacock', value: 'peacock' },
                { label: 'Penguin', value: 'penguin' },
                { label: 'Rabbit', value: 'rabbit' },
                { label: 'Zebra', value: 'zebra' },
            ],
        },
        {
            id: '3',
            title: "Can you identify who am I?",
            text: "I hop through the lush grass, my ears perked up, ready to listen for any signs of danger while I nibble on tender clovers.",
            poster: require('./img/rabbit.jpg'),
            correctAnswer: 'rabbit',  // Correct answer
            items: [
                { label: 'Bee', value: 'bee' },
                { label: 'Crocodile', value: 'crocodile' },
                { label: 'Deer', value: 'deer' },
                { label: 'Elephant', value: 'elephant' },
                { label: 'Giraffe', value: 'giraffe' },
                { label: 'Hummingbird', value: 'hummingbird' },
                { label: 'Kingfisher', value: 'kingfisher' },
                { label: 'Leopard', value: 'leopard' },
                { label: 'Owl', value: 'owl' },
                { label: 'Peacock', value: 'peacock' },
                { label: 'Penguin', value: 'penguin' },
                { label: 'Rabbit', value: 'rabbit' },
                { label: 'Zebra', value: 'zebra' },
            ],
        },
    ];

    const handleSelect = (questionId, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleSubmit = () => {
        let score = 0;
        questions.forEach((question) => {
            if (selectedOptions[question.id] === question.correctAnswer) {
                score++;
            }
        });

        Alert.alert("Results", `You got ${score} out of ${questions.length} correct!`);
    };

    return (
        <View>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    poster={question.poster}
                    title={question.title}
                    text={question.text}
                    items={question.items}
                    onSelect={(value) => handleSelect(question.id, value)}
                />
            ))}
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
};

const Questions = () => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.pageTitleContainer}>
                    <Icon name="dog" size={24} style={styles.pageTitleIcon} />
                    <Text style={styles.pageTitle}>What Are These Animals?</Text>
                </View>
                <QuestionInfo />
            </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#f5f5f5',
    },
    container: {
        padding: 16,
    },
    pageTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
    },
    pageTitleIcon: {
        marginRight: 8, // Space between icon and text
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    questionContainer: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginBottom: 12,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        borderWidth:2,
        borderRadius:4,
        paddingVertical: 8,
        textAlign: 'center',
        backgroundColor: 'skyblue',
    },
    description: {
        flex: 1,
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    icon: {
        marginLeft: 8,
        color: 'black',
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    // Add any custom picker styles if needed
});

export default Questions;
