"use client"
//{error}:{error : Error;} This is TypeScript + React props destructuring, and the confusion is very natural

// will give good exaple how it will work

// type ErrorProps = {                                    |
//   error: Error;                                        |
// };                                                     | => this entire code will right in single line
// export default function Error({ error }: ErrorProps) { |  =>{error}:{error : Error;}  , thats it 
// }                                                      |

export default function Error({error}:{error : Error;}){
   return(
    <div className="text-red-600">
        Error Loading users : {error.message}
    </div>
   );
}