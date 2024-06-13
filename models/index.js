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

Forum.hasMany(User, {
    foreignKey: 'user_id'
})

Post.belongsTo(Forum, {
    foreignKey: 'forum_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.hasOne(User, {
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