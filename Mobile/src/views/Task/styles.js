import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    ImageIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    },
    label: {
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        paddingHorizontal: 10,
        marginTop: 20,
        paddingLeft: 20,
    },
    inputArea: {
        width: '95%',
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#EE6B26',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 200,
        textAlignVertical: 'top',
    },
    inLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 28,

    },
    inputInLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    switchLabel: {
        fontWeight: 'bold',
        color: '#EE6B26',
        textTransform: 'uppercase',
        fontSize: 16,
        padding: 10,
    },
    removeLabel: {
        fontWeight: 'bold',
        color: '#20295f',
        textTransform: 'uppercase',
        fontSize: 16

    }

});

export default styles;