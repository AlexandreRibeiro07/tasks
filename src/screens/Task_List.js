import React, { Component } from "react"
import { StyleSheets, View, Text } from "react-native"

export default class TaskList extends Component {
    render() {
        return (
            <View>
                <Text>Lista de Tarefas</Text>
            </View>
        )
    }
}

const styles = StyleSheets.create({
    container: {
        flex: 1
    }
})
