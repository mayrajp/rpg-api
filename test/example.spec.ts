import test from 'japa'

test.group('example', function () {
    test('assert sum', function (assert) {
        assert.equal(2+2, 4)
    })
})