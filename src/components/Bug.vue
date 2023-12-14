<template>
    <Form :initial-values="initialValues">
        <FieldArray name="locations" v-slot="{ fields, push, remove, insert }">
            <div v-for="(entry, idx) in fields" :key="entry.key">
                <Field :name="`locations[${idx}]`" v-slot="{ value, handleChange }">
                    <input :value="value.latitude"/>
                    <input :value="value.longitude"/>
                </Field>
                <button type="button" @click="remove(idx)">Remove</button>
                <button type="button" @click="insert(idx, {latitude: null, longitude: null})">Insert</button>
            </div>
            <button type="button" @click="push('')">Add</button>
        </FieldArray>
        <button>Submit</button>
    </Form>
</template>

<script>
    import {Form, FieldArray, Field} from "vee-validate";

    console.log(Field)

    export default {
        name: 'Bug',
        components: {Form, FieldArray, Field},
        data() {
            return {
                initialValues: {
                    locations: [
                        {
                            latitude: null,
                            longitude: null
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
