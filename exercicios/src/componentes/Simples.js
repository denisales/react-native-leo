import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao'

//componente funcional
export default props => <Text style={[Padrao.ex]}>{props.texto}</Text>

// export default props => {
//     return (
//         <View>
//              <Text style={Style.f20}>{props.texto}</Text>
//              <Text style={Style.f20}>{props.texto}</Text>
//         </View>
//     )
// }


// export default props => {
//     return [
//             <Text key={1} style={Style.f20}>{props.texto}</Text>,
//             <Text key={2} style={Style.f20}>{props.texto}</Text>
//     ]
// }
