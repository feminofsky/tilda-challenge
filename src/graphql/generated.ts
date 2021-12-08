import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "quizzes" */
  delete_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** delete single row from the table: "quizzes" */
  delete_quizzes_by_pk?: Maybe<Quizzes>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "quizzes" */
  insert_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** insert a single row into the table: "quizzes" */
  insert_quizzes_one?: Maybe<Quizzes>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update data of the table: "quizzes" */
  update_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** update single row of the table: "quizzes" */
  update_quizzes_by_pk?: Maybe<Quizzes>;
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuizzesArgs = {
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quizzes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuizzesArgs = {
  objects: Array<Quizzes_Insert_Input>;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quizzes_OneArgs = {
  object: Quizzes_Insert_Input;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuizzesArgs = {
  _set?: InputMaybe<Quizzes_Set_Input>;
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quizzes_By_PkArgs = {
  _set?: InputMaybe<Quizzes_Set_Input>;
  pk_columns: Quizzes_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
};


/** query root */
export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


/** query root */
export type Query_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


/** query root */
export type Query_RootQuizzes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  answer: Scalars['String'];
  id: Scalars['uuid'];
  options: Scalars['String'];
  /** An object relationship */
  quiz: Quizzes;
  quiz_id: Scalars['uuid'];
  text: Scalars['String'];
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questions_Max_Order_By>;
  min?: InputMaybe<Questions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Questions_Bool_Exp>>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Questions_Bool_Exp>>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<String_Comparison_Exp>;
  quiz?: InputMaybe<Quizzes_Bool_Exp>;
  quiz_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint */
  QuestionsPkey = 'questions_pkey'
}

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['String']>;
  quiz?: InputMaybe<Quizzes_Obj_Rel_Insert_Input>;
  quiz_id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  answer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  options?: Maybe<Scalars['String']>;
  quiz_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  quiz_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  answer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  options?: Maybe<Scalars['String']>;
  quiz_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  quiz_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** on conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** ordering options when selecting data from "questions" */
export type Questions_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  quiz?: InputMaybe<Quizzes_Order_By>;
  quiz_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "questions" */
export type Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['String']>;
  quiz_id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  Text = 'text'
}

/** columns and relationships of "quizzes" */
export type Quizzes = {
  __typename?: 'quizzes';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
};


/** columns and relationships of "quizzes" */
export type QuizzesQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "quizzes" */
export type QuizzesQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** aggregated selection of "quizzes" */
export type Quizzes_Aggregate = {
  __typename?: 'quizzes_aggregate';
  aggregate?: Maybe<Quizzes_Aggregate_Fields>;
  nodes: Array<Quizzes>;
};

/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_Fields = {
  __typename?: 'quizzes_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quizzes_Max_Fields>;
  min?: Maybe<Quizzes_Min_Fields>;
};


/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quizzes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quizzes" */
export type Quizzes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Quizzes_Max_Order_By>;
  min?: InputMaybe<Quizzes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quizzes" */
export type Quizzes_Arr_Rel_Insert_Input = {
  data: Array<Quizzes_Insert_Input>;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quizzes". All fields are combined with a logical 'AND'. */
export type Quizzes_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Quizzes_Bool_Exp>>>;
  _not?: InputMaybe<Quizzes_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Quizzes_Bool_Exp>>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
};

/** unique or primary key constraints on table "quizzes" */
export enum Quizzes_Constraint {
  /** unique or primary key constraint */
  QuizzesPkey = 'quizzes_pkey'
}

/** input type for inserting data into table "quizzes" */
export type Quizzes_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Quizzes_Max_Fields = {
  __typename?: 'quizzes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quizzes" */
export type Quizzes_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Quizzes_Min_Fields = {
  __typename?: 'quizzes_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quizzes" */
export type Quizzes_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "quizzes" */
export type Quizzes_Mutation_Response = {
  __typename?: 'quizzes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quizzes>;
};

/** input type for inserting object relation for remote table "quizzes" */
export type Quizzes_Obj_Rel_Insert_Input = {
  data: Quizzes_Insert_Input;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};

/** on conflict condition type for table "quizzes" */
export type Quizzes_On_Conflict = {
  constraint: Quizzes_Constraint;
  update_columns: Array<Quizzes_Update_Column>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};

/** ordering options when selecting data from "quizzes" */
export type Quizzes_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
};

/** primary key columns input for table: "quizzes" */
export type Quizzes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "quizzes" */
export enum Quizzes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "quizzes" */
export type Quizzes_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "quizzes" */
export enum Quizzes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
};


/** subscription root */
export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuizzes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetQuestionByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetQuestionByIdQuery = { __typename?: 'query_root', questions_by_pk?: { __typename?: 'questions', id: any, quiz_id: any, answer: string, text: string, options: string } | null | undefined };

export type GetQuestionsByQuizIdQueryVariables = Exact<{
  quiz_id: Scalars['uuid'];
}>;


export type GetQuestionsByQuizIdQuery = { __typename?: 'query_root', questions: Array<{ __typename?: 'questions', id: any, answer: string, options: string, text: string, quiz_id: any }> };

export type GetQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuizzesQuery = { __typename?: 'query_root', quizzes: Array<{ __typename?: 'quizzes', id: any, name: string, questions: Array<{ __typename?: 'questions', id: any, answer: string }> }> };

export type GetQuizByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetQuizByIdQuery = { __typename?: 'query_root', quizzes_by_pk?: { __typename?: 'quizzes', name: string, questions: Array<{ __typename?: 'questions', id: any, answer: string, options: string, text: string }> } | null | undefined };


export const GetQuestionByIdDocument = gql`
    query getQuestionByID($id: uuid!) {
  questions_by_pk(id: $id) {
    id
    quiz_id
    answer
    text
    options
  }
}
    `;

/**
 * __useGetQuestionByIdQuery__
 *
 * To run a query within a React component, call `useGetQuestionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionByIdQuery, GetQuestionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionByIdQuery, GetQuestionByIdQueryVariables>(GetQuestionByIdDocument, options);
      }
export function useGetQuestionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionByIdQuery, GetQuestionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionByIdQuery, GetQuestionByIdQueryVariables>(GetQuestionByIdDocument, options);
        }
export type GetQuestionByIdQueryHookResult = ReturnType<typeof useGetQuestionByIdQuery>;
export type GetQuestionByIdLazyQueryHookResult = ReturnType<typeof useGetQuestionByIdLazyQuery>;
export type GetQuestionByIdQueryResult = Apollo.QueryResult<GetQuestionByIdQuery, GetQuestionByIdQueryVariables>;
export const GetQuestionsByQuizIdDocument = gql`
    query getQuestionsByQuizID($quiz_id: uuid!) {
  questions(limit: 1, where: {quiz_id: {_eq: $quiz_id}}) {
    id
    answer
    options
    text
    quiz_id
  }
}
    `;

/**
 * __useGetQuestionsByQuizIdQuery__
 *
 * To run a query within a React component, call `useGetQuestionsByQuizIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsByQuizIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsByQuizIdQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useGetQuestionsByQuizIdQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionsByQuizIdQuery, GetQuestionsByQuizIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsByQuizIdQuery, GetQuestionsByQuizIdQueryVariables>(GetQuestionsByQuizIdDocument, options);
      }
export function useGetQuestionsByQuizIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsByQuizIdQuery, GetQuestionsByQuizIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsByQuizIdQuery, GetQuestionsByQuizIdQueryVariables>(GetQuestionsByQuizIdDocument, options);
        }
export type GetQuestionsByQuizIdQueryHookResult = ReturnType<typeof useGetQuestionsByQuizIdQuery>;
export type GetQuestionsByQuizIdLazyQueryHookResult = ReturnType<typeof useGetQuestionsByQuizIdLazyQuery>;
export type GetQuestionsByQuizIdQueryResult = Apollo.QueryResult<GetQuestionsByQuizIdQuery, GetQuestionsByQuizIdQueryVariables>;
export const GetQuizzesDocument = gql`
    query getQuizzes {
  quizzes {
    id
    name
    questions {
      id
      answer
    }
  }
}
    `;

/**
 * __useGetQuizzesQuery__
 *
 * To run a query within a React component, call `useGetQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
      }
export function useGetQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export type GetQuizzesQueryHookResult = ReturnType<typeof useGetQuizzesQuery>;
export type GetQuizzesLazyQueryHookResult = ReturnType<typeof useGetQuizzesLazyQuery>;
export type GetQuizzesQueryResult = Apollo.QueryResult<GetQuizzesQuery, GetQuizzesQueryVariables>;
export const GetQuizByIdDocument = gql`
    query getQuizByID($id: uuid!) {
  quizzes_by_pk(id: $id) {
    name
    questions {
      id
      answer
      options
      text
    }
  }
}
    `;

/**
 * __useGetQuizByIdQuery__
 *
 * To run a query within a React component, call `useGetQuizByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuizByIdQuery(baseOptions: Apollo.QueryHookOptions<GetQuizByIdQuery, GetQuizByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizByIdQuery, GetQuizByIdQueryVariables>(GetQuizByIdDocument, options);
      }
export function useGetQuizByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizByIdQuery, GetQuizByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizByIdQuery, GetQuizByIdQueryVariables>(GetQuizByIdDocument, options);
        }
export type GetQuizByIdQueryHookResult = ReturnType<typeof useGetQuizByIdQuery>;
export type GetQuizByIdLazyQueryHookResult = ReturnType<typeof useGetQuizByIdLazyQuery>;
export type GetQuizByIdQueryResult = Apollo.QueryResult<GetQuizByIdQuery, GetQuizByIdQueryVariables>;