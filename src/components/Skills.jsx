// import { useEffect, useReducer } from 'react';
// import axios from 'axios';
// // import Circle from 'react-circle';

// import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';
// import { requestStates } from '../constants';


// export const Skills = () => {
//   const [state, dispatch] = useReducer(skillReducer, initialState);

//   const converseCountToPercentage = (count) => {
//     if (count > 10) { return 100; }
//     return count * 10;
//   }; 

//   useEffect(() => {
//     dispatch({ type: actionTypes.fetch });
//     axios.get('https://api.github.com/users/tamutamu00/repos')
//       .then((response) => {
//         const languageList = response.data.map(res => res.language);
//         const countedLanguageList = generateLanguageCountObj(languageList);
//         dispatch({ type: actionTypes.success, payload: { languageList: countedLanguageList } });
//       })
//       .catch(() => {
//         dispatch({ type: actionTypes.error });
//       });
//   }, []);

//   const generateLanguageCountObj = (allLanguageList) => {
//     const notNullLanguageList = allLanguageList.filter(language => language != null);
//     // スプレッドで新しい配列を作りつつ、Setオブジェクトを作り、一意の値しか入らないようにする
//     const uniqueLanguageList = [...new Set(notNullLanguageList)];
//     console.log(uniqueLanguageList)
//     return uniqueLanguageList.map(item => {
//       return {
//         language: item,
//         count: allLanguageList.filter(language => language === item).length
//       }
//     });
//   };


//   return (
//     <div id="skills">
//       <div className="container">
//         <div className="heading">
//           <h2>Skills</h2>
//         </div>
//         <div className="skills-container">
//           {
//             state.requestStates === requestStates.loading && (
//               <p clasName="description">取得中</p>
//             )
//           }
//           {
//             state.requestState === requestStates.success && (
//               state.languageList.map((item, index) => (
//                 <div className="skill-item" key={index}>
//                   <p className="description"><strong>{item.language}</strong></p>
//                   <Circle
//                     animate
//                     progress={converseCountToPercentage(item.count)}
//                   />
//                 </div>
//               ))
//             )
//           }
//           {
//             state.requestState === requestStates.error && (
//               <p className="description">エラーが発生しました</p>
//             )
//           }
//         </div>
//       </div>
//     </div>
//   );
// };