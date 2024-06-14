const Comment = require('./Comment.js');
const Company = require('./Company.js');
const Event = require('./Event.js');
const Forum = require('./Forum.js');
const Post = require('./Post.js');
const User = require('./User.js');
const UserEvent = require('./UserEvent.js')

Company.hasMany(User, {
    foreignKey: 'company_id',
});

Company.hasMany(Event, {
    foreignKey: 'company_id',
})

User.belongsTo(Company, {
    foreignKey: 'company_id'
})

Event.belongsTo(Company, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
})

Forum.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Forum, {
    foreignKey: 'user_id',
})
User.hasMany(Post, {
    foreignKey: 'user_id',
})


Post.belongsTo(Forum, {
    foreignKey: 'forum_id',
    onDelete: 'CASCADE'
})
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Forum.hasMany(Post, {
    foreignKey: 'forum_id',
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

User.belongsToMany(Event, { through: 'user_event', foreignKey: 'user_id' });

Event.belongsToMany(User, { through: 'user_event', foreignKey: 'event_id' });


module.exports = {
    Comment,
    Company,
    Event,
    Forum,
    Post,
    User,
    UserEvent,
};